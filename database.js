import mysql from 'mysql';

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"todoDb"
})

connection.connect((error)=>{
    if(error){
        console.log(error);
    }else console.log("Commected to the db!");
})

export default connection;