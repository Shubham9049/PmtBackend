const sql=require("mysql")
require("dotenv").config()

const connection=sql.createConnection({
    host:process.env.HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    timezone:"Asia/Kolkata",
    port:process.env.PORT
})



connection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to the Database!")
    }
})


module.exports={connection};