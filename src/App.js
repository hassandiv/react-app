import "./App.css";
import Form from "./challengeOne/Form";
import Folders from "./challengeTwo/Folders";
import FormApi from "./challengeThree/FormApi";
import FormApiTwo from "./challengeFour/FormApiTwo";
import GuessingGame from "./challengeFive/GuessingGame";
import ClickAnywhere from "./challengeSix/ClickAnwhere";

const App = () => {
  return (
    <>
      <div className="App">
        <Form />
        <Folders />
        <FormApi />
        <FormApiTwo />
        <GuessingGame />
      </div>
      <ClickAnywhere />
    </>
  );
};

export default App;
