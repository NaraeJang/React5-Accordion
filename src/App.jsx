import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    // data.filter((question) => question.id !== id);

    // if (id === activeId) {
    //   return setActiveId(null);
    // }
    // return setActiveId(id);

    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
