import { useEffect, useState } from "react";

const FormApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Hello</div>;
};
export default FormApi;
