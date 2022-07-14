const express = require('express');
const app= express();
const mongoose = require('mongoose');
const cors = require('cors');
const UsersModel = require('./modules/users');
const PlayerReportModel = require('./modules/playerReport');
const ScheduleModel= require('./modules/schedule');
const MessageModel= require('./modules/message');
const jwt= require('jsonwebtoken');
const path = require("path");
const bcrypt= require("bcrypt");
require("dotenv").config();


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

app.get("/getUsers", (req, res)=>{
    UsersModel.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})


app.get("/getUserId/:username", (req, res)=>{
    const user_name = req.params.username
    UsersModel.find({username: user_name}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result[0]._id)
        }
    })
})

app.post("/login", async (req, res)=>{
    
    const user = await UsersModel.findOne({
        username: req.body.username
    })

    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    console.log(correctPassword)

    if(user && correctPassword){
        const token = jwt.sign({ 
            username: user.username
        }, 'signed123456789')
        return res.json({status: "ok", user: token })
    }else{
        res.json({status: "User not found!", user: false})
    }
})

app.post("/createUser", async (req, res)=>{
    const user= req.body;
    const hashedPassword= await bcrypt.hash(user.password, 10);
    const hashedConfirmPassword= await bcrypt.hash(user.confirmPassword, 10);
    const newUser={
        ...user,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword
    }
    const userToSave= new UsersModel(newUser);
    await userToSave.save();
    res.json(newUser);
})


app.get("/getPlayerReport", (req, res)=>{
    PlayerReportModel.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
});

app.get("/getPlayerReport/:id", (req, res)=>{
    const id = req.params.id;
    PlayerReportModel.find({_id: id}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
});

app.post("/createPlayerReport", async (req, res)=>{
    const playerReport= req.body;
    const newPlayerReport= new PlayerReportModel(playerReport);
    await newPlayerReport.save();
    res.json(playerReport);
})

app.delete("/deletePlayerReport/:id", (req, res)=>{
    const id = req.params.id
    PlayerReportModel.findByIdAndRemove({_id: id}, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(500).send()
        }else{
            console.log(result)
            return res.status(200).send()
        }
    })
})


app.post("/createToDo", async (req, res)=>{
    const todo= req.body;
    const newToDo= new ScheduleModel(todo);
    await newToDo.save();
    res.json(todo);
})

app.get("/getToDos", (req, res)=>{
    ScheduleModel.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})

app.get("/getToDos/:id", (req, res)=>{
    const id = req.params.id;
    ScheduleModel.find({_id: id}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
});


app.delete("/deleteToDo/:id", (req, res)=>{
    const id = req.params.id
    ScheduleModel.findByIdAndRemove({_id: id}, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(500).send()
        }else{
            console.log(result)
            return res.status(200).send()
        }
    })
})


app.patch("/updateToDo/:id", async (req, res, next)=>{
    try{
        const id= req.params.id;
        const updates= req.body;
        const options= {new: true};
        await ScheduleModel.findByIdAndUpdate(id, updates, options).then(response=>res.send(response))
    }catch(error){
        console.log(error.message)
    }
})


//API for messages

app.post("/createMessage", async (req, res)=>{
    const message= req.body;
    const newMessage= new MessageModel(message);
    await newMessage.save();
    res.json(message);
})


app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log('Server is running on port 3001')
})