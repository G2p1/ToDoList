import { useEffect, useState, ReactNode } from "react";
import "./css/Task.css";

interface Props {
  children?:ReactNode,
  id:string,
  head:string,
  body:string,
  changeContent:Function
}

const Task = ({children, id, head, body, changeContent}:Props) => {
  const [headContent, setHead] = useState("");
  const [bodyContent, setBody] = useState("");

  useEffect(() => {
    setHead(head);
    setBody(body);
  }, []);

  function changeHead(e:React.FocusEvent):void{
    if (e.currentTarget.textContent) {
        let content: string = e.currentTarget.textContent;
        setHead(content);
      }

      changeContent(id, headContent, bodyContent);
  }

  function changeBody(e: React.FocusEvent): void {
    if (e.currentTarget.textContent) {
      let content: string = e.currentTarget.textContent;
      setBody(content);
    }

    changeContent(id, headContent, bodyContent);
  }

  return (
    <div className={"task"}>
      <div
        className="head-task"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onBlur={(e) => changeHead(e)}
      >
        {headContent}
      </div>
      <div
        className="body-task"
        contentEditable="true"
        onBlur={(e) => changeBody(e)}
        suppressContentEditableWarning={true}
      >
        {bodyContent}
      </div>
      {children}
    </div>
  );
};

export default Task;
