import React, {useEffect, useState} from "react";
import './todoList.css';
import Axios from 'axios';
import {ToDoBox} from "./todoBox";
import { useNavigate } from "react-router-dom";
import addReport from '../../../media/images/icons8-add-100.png';
import { Edit } from "./edit";


export const TodoList = ()=>{

    const [todoList, setTodoList] = useState([]);
    const [info, setInfo] = useState({
        homeTeam: "",
        awayTeam: "",
        date: "",
        time:"",
        player:"",
        location:""
    });
    const [showEdit, setShowEdit] = useState(false)
    const navigate = useNavigate();


    useEffect(()=>{
        let cancel=false;
        Axios.get("https://youscout-tryout.herokuapp.com/getToDos").then(res=>{
            if(cancel)return
            setTodoList(res.data)
            console.log(res)
        })
        return()=> cancel=true
    },[info._id]);

    const editable = async (id)=>{
        await Axios.get(`https://youscout-tryout.herokuapp.com/getToDos/${id}`).then(response=> {
            setInfo(response.data[0])
            console.log(info)
            setShowEdit(true)
        })
    }

    return(
        <div className="todoList-container">
            <div>{todoList.map(todo=><ToDoBox todo={todo} key={todo._id} editable={editable} setTodoList={setTodoList} todoList={todoList} />)}</div>
            <img alt="add report" src={addReport} id="add-todo" onClick={()=>navigate('/newTodo')}></img>
            <Edit info={info} setInfo={setInfo} showEdit={showEdit} setShowEdit={setShowEdit} todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}