const { gil_stm } = require('../controllers/dbController');

gil_stm.insert([
    {
        day:'monday',
        timetables:[
            {
                departureTime: "09:30",
                arrivalTime: "13:30",
                duration: "1 Hour"
            },
            {
                departureTime: "13:30",
                arrivalTime: "17:30",
                duration: "1 Hour"
            },
            {
                departureTime: "18:45",
                arrivalTime: "19:45",
                duration: "1 Hour"
            }
        ]  
    },
    {
        day:'tuesday',
        timetables:[
            {
                departureTime: "09:30",
                arrivalTime: "13:30",
                duration: "1 Hour"
            },
            {
                departureTime: "13:30",
                arrivalTime: "17:30",
                duration: "1 Hour"
            },
            {
                departureTime: "18:45",
                arrivalTime: "19:45",
                duration: "1 Hour"
            }
        ]  
    },
    {
        day:'wednesday',
        timetables:[
            {
                departureTime: "09:30",
                arrivalTime: "13:30",
                duration: "1 Hour"
            },
            {
                departureTime: "13:30",
                arrivalTime: "17:30",
                duration: "1 Hour"
            },
            {
                departureTime: "18:45",
                arrivalTime: "19:45",
                duration: "1 Hour"
            }
        ]  
    },
    {
        day:'thursday',
        timetables:[
            {
                departureTime: "09:30",
                arrivalTime: "13:30",
                duration: "1 Hour"
            },
            {
                departureTime: "13:30",
                arrivalTime: "17:30",
                duration: "1 Hour"
            },
            {
                departureTime: "18:45",
                arrivalTime: "19:45",
                duration: "1 Hour"
            }
        ]  
    },
    {
        day:'friday',
        timetables:[
            {
                departureTime: "09:30",
                arrivalTime: "13:30",
                duration: "1 Hour"
            },
            {
                departureTime: "13:30",
                arrivalTime: "17:30",
                duration: "1 Hour"
            },
            {
                departureTime: "18:45",
                arrivalTime: "19:45",
                duration: "1 Hour"
            }
        ]  
    },
    {
        day:'saturday',
        timetables:[
            {
                departureTime: "09:30",
                arrivalTime: "13:30",
                duration: "1 Hour"
            },
            {
                departureTime: "13:30",
                arrivalTime: "17:30",
                duration: "1 Hour"
            },
            {
                departureTime: "18:45",
                arrivalTime: "19:45",
                duration: "1 Hour"
            }
        ]  
    },
    {
        day:'sunday',
        timetables:[
            {
                departureTime: "09:30",
                arrivalTime: "13:30",
                duration: "1 Hour"
            },
            {
                departureTime: "13:30",
                arrivalTime: "17:30",
                duration: "1 Hour"
            },
            {
                departureTime: "18:45",
                arrivalTime: "19:45",
                duration: "1 Hour"
            }
        ]  
    }
], (err, newDocs) => {
    if (err) return console.log(err);
    console.log('inserted:', newDocs);
  })