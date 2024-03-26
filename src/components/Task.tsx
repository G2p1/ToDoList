import { useEffect, useState, ReactNode } from "react";
import "./css/Task.css";

interface Props {
  children?: ReactNode;
  id: string;
  head: string;
  body: string;
  changeContent: Function;
}

const Task = ({ children, id, head, body, changeContent }: Props) => {
  const [headContent, setHead] = useState("");
  const [bodyContent, setBody] = useState("");

  useEffect(() => {
    setHead(head);
    setBody(body);
  }, []);

  useEffect(()=>{
    changeContent(id, headContent, bodyContent);
  },[headContent, bodyContent])

  function changeHead(e: React.FocusEvent): void {
    let content: string = head
    if(e.currentTarget.textContent == null){
      return;
    }
    content = e.currentTarget.textContent;
      setHead(content);
    

  }

  function changeBody(e: React.FocusEvent): void {
    if (e.currentTarget.textContent) {
      let content: string = e.currentTarget.textContent;
      setBody(content);
    }
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
