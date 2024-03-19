import { useEffect, useState } from "react";
import "./css/Task.css";

const Task = () => {
  const [head, setHead] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setHead("Task Head");
    setBody("Task Body");
  }, []);

  function changeHead(e:React.FocusEvent):void{
    if (e.currentTarget.textContent) {
        let content: string = e.currentTarget.textContent;
        setHead(content);
      }
  }

  function changeBody(e: React.FocusEvent): void {
    if (e.currentTarget.textContent) {
      let content: string = e.currentTarget.textContent;
      setBody(content);
    }
  }

  return (
    <div className="task">
      <div
        className="head-task"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={(e) => changeHead(e)}
      >
        {head}
      </div>
      <div
        className="body-task"
        contentEditable="true"
        onBlur={(e) => changeBody(e)}
        suppressContentEditableWarning={true}
      >
        {body}
      </div>
    </div>
  );
};

export default Task;
