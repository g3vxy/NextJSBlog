import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <h1
        className="text-4xl text-purple-500 font-bold"
        style={{ textShadow: "0px 0px 12px" }}
      >
        Hello World!
      </h1>
    </div>
  );
};

export default Home;
