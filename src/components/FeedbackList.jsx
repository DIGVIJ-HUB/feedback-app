import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, deleteFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feeedbak yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          deleteFeedback={deleteFeedback}
        ></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
