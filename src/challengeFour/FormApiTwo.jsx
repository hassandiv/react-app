import { useEffect, useState } from "react";

const FormApiTwo = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const limitData = data.slice(0, 10);
  // // console.log("limitData", limitData.length);
  // const splice = limitData.splice(0, 1);
  // //splice(index number, no of items, )
  // console.log("splice", splice.length);

  const FetchApi = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div>
      {error}
      {limitData.map((item, idx) => (
        <li key={idx}>{item.title}</li>
      ))}
    </div>
  );
};
export default FormApiTwo;
