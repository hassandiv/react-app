import { useEffect, useState } from "react";

const FormApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  console.log(data);
  console.error("error", error);

  const getData = async () => {
    await fetch("https://jsonplaceholde.typicode.com/todos")
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
