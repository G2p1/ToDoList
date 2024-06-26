import { Fragment, useEffect, useState } from "react";
import TaskType from "../types/TaskType";
import Task from "./Task";
import "./css/Button.css";
import "./css/TaskList.css";
import { uid } from "uid";

const TaskList = () => {
  const defaultTask: TaskType = {
    id: uid(),
    head: "Task name",
    body: "Task Body",
  };

  const [tasks, setTasks] = useState(Array<TaskType>);

  useEffect(() => {
    let checkLocaleTasks = localStorage.getItem("tasks");
    let localeTasks:Array<TaskType>
    if(checkLocaleTasks){
    localeTasks = JSON.parse(checkLocaleTasks);}
    else{
      localeTasks = [defaultTask];
    }
    setTasks(localeTasks);
  }, []);

  useEffect(() => {
    if (tasks.length>0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  function createTask() {
    const addTask = {
      id: uid(),
      head: "Task name",
      body: "Task Body",
    };
    setTasks([...tasks, addTask]);
  }

  function remooveTask(id: string) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  function changeContent(id: string, head: string, body: string) {
    let index = tasks.findIndex((item) => item.id == id);
    tasks[index].body = body;
    tasks[index].head = head;
    setTasks([...tasks]);
  }

  return (
    <Fragment>
      <div className="tasklist">
        {tasks.map((task: TaskType) => {
          return (
            <div key={task.id}>
              <Task
                id={task.id}
                head={task.head}
                body={task.body}
                changeContent={changeContent}
              >
                <button
                  className="rm-button"
                  onClick={() => remooveTask(task.id)}
                >
                  -
                </button>
              </Task>
            </div>
          );
        })}
        <button className="cr-button" onClick={createTask}>
          +
        </button>
      </div>
    </Fragment>
  );
};

export default TaskList;
