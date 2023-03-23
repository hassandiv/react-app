import "./App.css";
import Layout from "./components/layout/Layout";
import Form from "./challengeOne/Form";
import Folders from "./challengeTwo/Folders";
import FormApi from "./challengeThree/FormApi";
import FormApiTwo from "./challengeFour/FormApiTwo";
import GuessingGame from "./challengeFive/GuessingGame";

const App = () => {
  return (
    <div className="App">
      {/* <Layout /> */}
      <Form />
      <Folders />
      <FormApi />
      <FormApiTwo />
      <GuessingGame />
    </div>
  );
};

export default App;
