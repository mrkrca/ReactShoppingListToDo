import React, {useState} from "react";


function TOdoItem(props) {

const [isDone, setIsDone] =useState(false)


function crossItem() {
    setIsDone((previus)=> !previus)
}


return (
    <div onClick={crossItem} onDoubleClick={() => props.removeItem(props.id)}>
        <li style={{textDecoration: isDone? "line-through" : "none"}} key={props.key}>{props.text}</li>
    </div>
         
    
)

}

export default TOdoItem;