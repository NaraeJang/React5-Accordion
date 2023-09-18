import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        console.log(question);
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
};
export default Questions;
