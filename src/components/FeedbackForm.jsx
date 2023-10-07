import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Rating from "./Rating";
import { useState } from "react";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [msg, setMsg] = useState("");
  const handleText = (e) => {
    if (text === "") {
      setbtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMsg("Text must be at leas 10 chracter");
    } else {
      setbtnDisabled(false);
      setMsg(null);
    }
    setText(e.target.value);
  };
  const handleForm = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleForm}>
        <h2>How would you rate your service with us?</h2>
        <Rating select={(rating) => setRating(rating)}></Rating>
        <div className="input-group" style={{ backgroundColor: "white" }}>
          <input
            onChange={handleText}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
}
export default FeedbackForm;
