import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ setQuestions, questions }) {

  function handleDelete (questionToDelete) {
    let newQuestionList = questions.filter((item) => item !== questionToDelete)

    fetch("http://localhost:4000/questions/" + questionToDelete.id, {
      method: "DELETE",
    })
    .then((resp) => resp.json())
    .then((data) => setQuestions(newQuestionList))
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map(question =>  
        <QuestionItem handleDelete={handleDelete} key={question.id} question={question}/> )}
      </ul>
    </section>
  );
}

export default QuestionList;
