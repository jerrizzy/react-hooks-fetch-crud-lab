import React, { useState } from "react";

function QuestionItem({ question, handleDelete }) {

  const { id, prompt, answers, correctIndex } = question;
  const[selected, setSelected] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}> {answer} </option>
  ));
  console.log(correctIndex)

  function handleChange(e) {
    const newCorrectIndex = parseInt(e.target.value)
    setSelected(newCorrectIndex)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Appplication/JSON"
      },
      body: JSON.stringify({ correctIndex: selected }),
    })
    .then((resp) => resp.json())
    .then((data) => console.log(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={()=>{handleDelete(question)}}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
