import {useEffect, useState } from "react";
import TaskType from "../types/TaskType";
import Task from "./Task";
import { uid } from "uid";

const TaskList = () =>{
    const [tasks, setTasks] = useState(Array<TaskType>)

    useEffect(()=>{
        let TaskArray:Array<TaskType>=[];
        const defaultTask = {
            id:uid(),
            head: 'Task name',
            body:'Task Body'
        }
        TaskArray.push(defaultTask);
        setTasks(TaskArray);
    },[]);

    return (
    <>
    {tasks.map((task:TaskType)=>{
        return <div key={task.id}><Task></Task></div>
    })}
    </>);
}

export default TaskList;

