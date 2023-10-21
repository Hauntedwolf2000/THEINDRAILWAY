import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import  express from 'express';
import mysql from 'mysql';
import  jwt  from 'jsonwebtoken';
import bodyParser from 'body-parser';
import session from 'express-session';


const salt=10;


const app=express()
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST","GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(session({
    secret : "secret",
    resave: "false",
    saveUninitialized: "false",
    cookie:{
        secure: false,
        maxAge : 1000 * 60 * 60 * 24
    }

}))

// mysq; db connection
const db =mysql.createConnection({
    host:'localhost',
    user:"root",
    password:'',
    database:'signup1'
})

//----------------------------------------------------------------------------------------------------------
import Shortid from 'shortid';
import Razorpay from 'razorpay';
import path from 'path';
import { log } from 'console';

app.get('/logo.png',(req,res)=>{
    res.sendFile(path.join(__dirname,'logo.png'))
})


const razorpay = new Razorpay({
    key_id:'rzp_test_cbYRQnjrIYjfzM',
    key_secret:'oO51vkQJ1sC9uc9ZcuBo6Oi0',
})
app.post('/razorpay',async (req,res)=>{
    const payment_capture=1
    const amount=4
    const currency='INR'

    const options={
        amount: (amount*100).toString(),
        currency,
        receipt:Shortid.generate(),
        payment_capture,
    }
    try {
        const response = await razorpay.orders.create(options);
        console.log(response);
    
        // Send a plain text response
        res.json({
            id:response.id,
            currency:response.currency,
            amount:response.amount
        })
      } catch (err) {
        console.error(err);
    
        // Send an error response
        res.status(500).send('Internal Server Error');
      }
    
})


//-----------------------------------------------------------------------------------------------------------


//code to verify the request responce of the cookie generation
const verifyUser=(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.json({Error: "You are not Authenticated"})
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err){
                return res.json({Error: "Token is not correct"});
            }else{
                req.name=decoded.name;
                next();
            }
        })
    }
}

//------------------------------------------------------verifying the user in 8081-----------------------------------------------
//code to verify user login
app.get('/',verifyUser,(req,res)=>{
    return res.json({Status:"Sucess", name:req.name});
})

//---------------------- creating a seesion id ----------------------------------------------------------------------------------------
// code to get the seession details
app.get('/',(req,res)=>{
    if(req.session.name){
        return res.json({valid:true, name:req.name});
    }else{
        return res.json({valid:false});
    }
})


//--------------------------------------sign up as a new user-------------------------------------------------------------------------


// code for new user to register and the code for sending the input data to database
app.post('/register', (req,res)=> {
    console.log("hfdjhi")
    const mysql ="INSERT INTO login (name,email,password) values ?";
    bcrypt.hash(req.body.password.toString(),salt,(err,hash)=>{
        if(err) return res.json({Error: "error in hashing the password"})
        const values=[[
            req.body.name,
            req.body.email,
            hash,
        ]]
        db.query(mysql,[values], (err,data) =>{
            if(err) return res.json({Error:"inserting the data in server error"});
            console.log("hekjhgi");
            return res.json({Status:"Sucess"});
        })
    })
})



//---------------------------------searching the trains---------------------------------------------------------------------------------------------------------

app.get('/search', (req, res) => {
    const fromStation = req.query.from;
    const destStation = req.query.dest;

    const sqlQuery = `
      SELECT train_number, train_name, departure_time, arrival_time
      FROM trains
      WHERE departure_station LIKE ? AND arrival_station LIKE ?;
    `;

    db.query(sqlQuery, [`%${fromStation}%`, `%${destStation}%`], (error, results) => {
        if (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Error fetching data' });
        } else {
            res.json(results);
        }
    });
});







//--------------------------------------Find my train with its intermediate  ------------------------------------------------------------------------------------------------------
// Endpoint for fetching train details by train number
app.get('/train/:trainNumber', (req, res) => {
    const trainNumber = req.params.trainNumber;
    const sqlQuery = `
      SELECT *
      FROM trains
      WHERE train_number = ?;
    `;
  
    db.query(sqlQuery, [trainNumber], (error, results) => {
        if (error) {
            console.error('Error fetching train details:', error);
            res.status(500).json({ error: 'Error fetching train details' });
        } else {
            res.json(results);
        }
    });
});

// Endpoint for fetching intermediate stops by train number
app.get('/intermediate/:trainNumber', (req, res) => {
    const trainNumber = req.params.trainNumber;
    const sqlQuery = `
      SELECT stop_id, station_name, arrival_time, departure_time
      FROM intermediate_stops
      WHERE train_number = ?;
    `;
  
    db.query(sqlQuery, [trainNumber], (error, results) => {
        if (error) {
            console.error('Error fetching intermediate stops:', error);
            res.status(500).json({ error: 'Error fetching intermediate stops' });
        } else {
            res.json(results);
        }
    });
});



//---------------------------------------------------complete login code--------------------------------------------------------------------------------------------------

//login page code for selecting and comparing creating cookies and forming sessions for the user
app.post('/login', (req,res)=> {
    console.log("hfdjhi")
    const mysql ="Select * from login Where email = ? ";
    db.query(mysql,[req.body.email], (err,data) =>{
        if(err) return res.json({Error:"Error in login server"});
        console.log("hekjhgi");
        if(data.length>0){
            const name=data[0].name;
            req.session.name=name
            console.log(req.session.name)
        }
        if(data.length>0){
            bcrypt.compare(req.body.password.toString(),data[0].password,(err,response)=>{
                if(err) return res.json({Error:"password compare error"});
                if(response){ 
                    const name=data[0].name;
                    const token=jwt.sign({name},"jwt-secret-key", {expiresIn:'1d'});
                    res.cookie('token',token);
                    return res.json({Status:'Sucess'});
                }else{
                    return res.json({Status:"Passord not matched"});
                }
            })
        }else{
            return res.json({Status:"No email existed "});
        }
    })
})

//---------------------------------------------------------------logot token and session close----
app.get('/logout',(req,res)=>{
    res.clearCookie('token')
    return res.json({Status:'Sucess'});
})

//--------------------------------------------------Boking Component-----------------------------









//--------------------------------------------------------------------------------------------------

app.get('/passengers', (req, res) => {
  const query = 'SELECT * FROM passengers';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching passengers data: ' + err.message);
      res.status(500).send('Error fetching passengers data');
    } else {
      res.status(200).json(results);
    }
  });
});


//-------------------------------------------------------------------------------------------------
const seatCounts = {
  sleeper: { u: 35, m: 30, l: 35 },
  ac: { u: 35, m: 30, l: 35 },
  general: { u: 35, m: 30, l: 35 },
};

function generatePNRNumber() {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Shuffle function to randomize the seat type order
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function allocateUniqueSeatNumbers(
  trainId,
  selectedClass,
  numPassengers
) {
  const seatTypeOrder = ["u", "m", "l"];
  if (!seatCounts[selectedClass][seatTypeOrder[0]]) {
    seatTypeOrder.forEach((type) => {
      seatCounts[selectedClass][type] = 0;
    });
  }

  // Shuffle the seat type order to randomize allocation
  shuffle(seatTypeOrder);

  const availableSeats = {
    u: seatCounts[selectedClass].u,
    m: seatCounts[selectedClass].m,
    l: seatCounts[selectedClass].l,
  };

  const bookedSeats = [];
  const query = `UPDATE trains1 SET seats_${selectedClass} = seats_${selectedClass} - ? WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.beginTransaction(async (err) => {
      if (err) {
        console.error("Error starting transaction:", err);
        reject("Error starting transaction");
      }

      // Track the count of seats selected for each class
      const seatCount = {
        sleeper: 0,
        ac: 0,
        general: 0,
      };

      for (let i = 0; i < numPassengers; i++) {
        let seatNumber = null;
        let seatType = null;

        for (const type of seatTypeOrder) {
          if (availableSeats[type] > 0) {
            seatType = type;
            seatNumber = availableSeats[seatType];
            break;
          }
        }

        if (!seatNumber || !seatType) {
          db.rollback((rollbackErr) => {
            if (rollbackErr) {
              console.error("Transaction rollback error:", rollbackErr);
            }
            reject("Seats not available");
          });
          return;
        }

        // Prefix seat number based on seat type (u, m, l)
        const modifiedSeatNumber = seatType + seatNumber;
        bookedSeats.push(modifiedSeatNumber);
        availableSeats[seatType]--;
        seatCount[selectedClass]++;

        try {
          await db.query(query, [1, trainId]);
        } catch (error) {
          db.rollback((rollbackErr) => {
            if (rollbackErr) {
              console.error("Transaction rollback error:", rollbackErr);
            }
            reject("Error updating seat count");
          });
          return;
        }
      }

      db.commit((commitErr) => {
        if (commitErr) {
          console.error("Transaction commit error:", commitErr);
          reject("Error committing transaction");
        } else {
          resolve({ bookedSeats, seatCount });
        }
      });
    });
  });
}

// REST API endpoints
app.get("/trains", (req, res) => {
  const { source, destination } = req.query;
  const query = `
    SELECT * FROM trains1
    WHERE source = ? AND destination = ?
  `;
  db.query(query, [source, destination], (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).send("Error fetching data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/bookings", async (req, res) => {
  const {
    trainId,
    selectedClass,
    numPassengers,
    passengers,
    source,
    destination,
  } = req.body;

  // Generate a PNR number
  const pnrNumber = generatePNRNumber();

  // Generate a booking date (format as YYYY-MM-DD)
  const booking_date = new Date().toISOString().split("T")[0];

  // Define the cost per seat for each class
  const costPerSeat = {
    general: 20,
    sleeper: 40,
    ac: 60,
  };

  // Calculate the total cost
  const totalCost = costPerSeat[selectedClass] * numPassengers;

  try {
    const { bookedSeats, seatCount } = await allocateUniqueSeatNumbers(
      trainId,
      selectedClass,
      numPassengers
    );

    if (bookedSeats) {
      db.beginTransaction(async (err) => {
        if (err) {
          console.error("Error starting transaction:", err);
          res.status(500).send("Error starting transaction");
          return;
        }

        for (const seatNumber of bookedSeats) {
          // Insert booking details into the database, including seat count and total cost
          db.query(
            "INSERT INTO bookings (train_id, source, destination, booking_date, seat_count, total_sum, booking_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
              trainId,
              source,
              destination,
              booking_date,
              seatCount[selectedClass],
              totalCost,
              pnrNumber,
            ],
            (err, result) => {
              if (err) {
                console.error("Error inserting booked seat:", err);
                db.rollback((rollbackErr) => {
                  if (rollbackErr) {
                    console.error("Transaction rollback error:", rollbackErr);
                  }
                  res.status(500).send("Error inserting booked seat");
                });
              } else {
                console.log(`Booked seat ${seatNumber} for train ${trainId}`);
              }
            }
          );
        }

        for (let i = 0; i < numPassengers; i++) {
          const passenger = passengers[i];
          const bookedSeat = bookedSeats[i];
          const seatType = bookedSeat[0]; // Get the seat type prefix
          const seatNumber = bookedSeat.substring(1); // Get the seat number without the prefix

          // Insert passenger details into the database, including seat class
          db.query(
            "INSERT INTO passengers (booking_id, name, age, gender, address, seat_type, seat_number, seat_class) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [
              pnrNumber,
              passenger.name,
              passenger.age,
              passenger.gender,
              passenger.address,
              seatType,
              seatNumber,
              selectedClass, // Insert the selected class as seat_class
            ],
            (err, result) => {
              if (err) {
                console.error("Error inserting passenger details:", err);
                db.rollback((rollbackErr) => {
                  if (rollbackErr) {
                    console.error("Transaction rollback error:", rollbackErr);
                  }
                  res.status(500).send("Error inserting passenger details");
                });
              } else {
                console.log(`Inserted passenger details for booking ${pnrNumber}`);
              }
            }
          );
        }

        db.commit((commitErr) => {
          if (commitErr) {
            console.error("Transaction commit error:", commitErr);
            res.status(500).send("Error committing transaction");
          } else {
            res.status(200).json({ pnrNumber });
          }
        });
      });
    } else {
      res.status(400).send("Seats not available");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
});


//--------------------------------------------------Pnr number--------------------------------------
// Define the route to fetch booking and passenger data
app.get('/bookings/:booking_id', (req, res) => {
  const booking_id = req.params.booking_id;

  // Fetch booking data
  const bookingQuery = 'SELECT * FROM bookings WHERE booking_id = ?';
  db.query(bookingQuery, [booking_id], (err, bookingResults) => {
    if (err) {
      console.error('Error fetching booking data:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (bookingResults.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Fetch passenger data
    const passengerQuery = 'SELECT * FROM passengers WHERE booking_id = ?';
    db.query(passengerQuery, [booking_id], (err, passengerResults) => {
      if (err) {
        console.error('Error fetching passenger data:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      const data = {
        booking: bookingResults[0], // Assuming one booking per booking_id
        passengers: passengerResults,
      };

      res.json(data);
    });
  });
});

app.get('/trains/:train_id', (req, res) => {
  const { train_id } = req.params;
  const trainQuery = 'SELECT name, departure_time, arrival_time FROM trains1 WHERE id = ?';

  db.query(trainQuery, [train_id], (err, trainResults) => {
    if (err) {
      console.error('Error fetching train data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (trainResults.length === 0) {
      res.status(404).json({ error: 'Train not found' });
      return;
    }

    res.json(trainResults[0]);
  });
});


//------------------------------------------------------------------------------------console log---

app.listen(8081,()=>{
    console.log("Running ....")
    console.log("Running in port 8081")
})


//Valid Password: "Passw0rd"
//Valid Password: "Secure123"
//Valid Password: "HelloW0rld"
//Valid Password: "OpenAI2023"