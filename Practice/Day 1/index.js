import express from 'express';

const app = express();

const userList = [
    {userName: 'lex'},
    {userName: 'jack'},
    {userName: 'cj'},
];

// Routes
app.get('/', (req, res)=>{
    res.send('Hello World! This is my first server.');
});

// User routs
app.get('/:userID', (req, res)=>{
    const userNames = parseInt(req.params.userID);
    res.send(`Hello ${userList[userNames].userName}! welcome to my first server.`);
});

app.listen(3000, ()=>{
    console.log("Server live on port 3000");
});