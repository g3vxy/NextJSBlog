import MainLayout from "../components/layouts/main";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
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

Home.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
