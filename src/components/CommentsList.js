import React, { useState } from "react";

    function GetComments() {
        const [comments, setComments] = useState([
            { id: 1, text: "Это первый комментарий" },
            { id: 2, text: "Это второй комментарий" },
            { id: 3, text: "Это третий комментарий" }
            ]);
    function revomeItemById(itemId) {
        setComments(currentState => currentState.filter(item => item.id !== itemId));
    }
        return ( comments.map((comment) => {
          return  <div> <p>{comment.text}</p> <button onClick={()=>revomeItemById(comment.id)} >Удалить комментарии </button> </div>
        }) );
    }
    
    export default GetComments;