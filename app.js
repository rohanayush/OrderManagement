const express= require("express")
var cors = require('cors')
const app = express()
app.use(cors())
app.get('/',(req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"Root",
        "endPoints":" /getData, /getUsers"
    })
})
app.get('/getUsers',(req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"Users",
        "users":[
            {
                user:"rohan@gmail.com",
                pass:"rohanayush"
            },
            {
                user:"ayush@gmail.com",
                pass:"ayush5431"
            }, {
                user:"rohanayush05@gmail.com",
                pass:"rohanayush"
            },

        ]
    })
})

app.get('/getData',(req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessage":"SUCCESS",
        "data":[
            {
                "order_no":1,
                "due_date":"13-05-2022",
                "buyer_name":"Ayush Ranjan",
                "customer_phone":"7992496642",
                "total":450
            },
            {
                "order_no":2,
                "due_date":"13-05-2022",
                "buyer_name":"Alice ",
                "customer_phone":"7992496642",
                "total":450
            },
            {
                "order_no":3,
                "due_date":"13-05-2022",
                "buyer_name":"Ayush Ranjan",
                "customer_phone":"7992496642",
                "total":450
            },
            {
                "order_no":4,
                "due_date":"13-05-2022",
                "buyer_name":"Intellije Kumar",
                "customer_phone":"7992496642",
                "total":450
            },
            {
                "order_no":5,
                "due_date":"13-05-2022",
                "buyer_name":"Pranjal",
                "customer_phone":"7992496642",
                "total":450
            },
            {
                "order_no":6,
                "due_date":"13-05-2022",
                "buyer_name":"Ayush Ranjan",
                "customer_phone":"7992496642",
                "total":450
            },
            {
                "order_no":7,
                "due_date":"13-05-2022",
                "buyer_name":"Ayush Singh",
                "customer_phone":"7992496642",
                "total":4150
            },
            {
                "order_no":8,
                "due_date":"13-05-2022",
                "buyer_name":"John Doe",
                "customer_phone":"7992496642",
                "total":550
            },
        ]
    })
})

app.listen(4500, (req,res) =>{
   
    console.log("express running");

})