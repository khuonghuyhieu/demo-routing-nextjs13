import axios from "axios";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // to testing loading page in NextJs 13

const Loading = async () => {
  await wait(5000);

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <>
      <div>Loading</div>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default Loading;
