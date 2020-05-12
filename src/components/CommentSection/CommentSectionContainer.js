// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
// console.log("props", props)

  // Add state for the comments
  const commentsArr = props.comments
  

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {commentsArr.map((comment, index) => {
        return <Comment comment={comment} key={index}/> ; 
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
