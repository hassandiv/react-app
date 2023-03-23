import { login } from "./utils/form";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isDisabled = !email || password.length < 6 || isLoading;
  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await login({ email, password });
      alert("Login successful");
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      console.log("err", err);
    }
  };

  return (
    <div className="form">
      <label htmlFor="email">Email</label>
      <input
        name={"email"}
        id={"email"}
        type={"email"}
        value={email}
        onChange={handleOnChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name={"password"}
        id={"password"}
        type={"password"}
        value={password}
        onChange={handleOnChange}
      />
      <div className="">{error}</div>
      <button disabled={isDisabled} onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};
export default Form;
