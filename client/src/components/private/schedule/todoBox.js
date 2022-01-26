import React from "react";
import './todoBox.css';
import remove from '../../../media/images/icons8-cross-mark-48.png';
import edit from '../../../media/images/icons8-edit-30.png';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


export const ToDoBox = ({todo, editable, setTodoList, todoList})=>{


    const navigate= useNavigate();

    const deleteToDo = (id) =>{
        Axios.delete(`http://localhost:3001/deleteToDo/${id}`).then(res=>{
            navigate('/schedule')
                });

        setTodoList(todoList.filter(td=>td._id!==id))
    }

    const handleDeleleToDo = (id)=>{
        deleteToDo(id)
    }

    

    const editDate = (date) =>{
        const newDate = new Date(todo.date)
        const day = newDate.getDate();
        const month = newDate.getMonth() +1;
        const year= newDate.getFullYear();
        return `${day} - ${month} - ${year} `
    }


    return(
        <div className="td-container">
        <div className="todo-container">
            <div className="match-details">
                <p id="home-team">{todo.homeTeam}</p>
                <p id="vs">vs</p>
                <p id="away-team">{todo.awayTeam}</p>
            </div>
            <div className="TimeDateDetails">
                <p>{todo.date ? editDate(todo.date): "?"}</p>
                <p>{todo.time}</p>
            </div>
            <p>{todo.player ? todo.player : "?"}</p>
            <p>{todo.location ? todo.location : "?"}</p>
        </div>
        <div>
            <img alt="remove" src={remove} id="removeTd" onClick={()=>handleDeleleToDo(todo._id)}></img>
        </div>
        <div>
            <img alt="edit" src={edit} className="removeEdit" id="editTd" onClick={()=>editable(todo._id)}></img>
        </div>
        </div>
    )
}