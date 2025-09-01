import { Link } from "react-router-dom";
import Layout from "../../../Layout";
import { Header } from "../../../components/sections/Header";
import { rischiSpeciali } from "../../../constants/content";
import { Button } from "../../../components/ui/button";

const RischiSpeciali = () => {
  return (
    <Layout>
      <Header
        heading={rischiSpeciali.section1.title}
        image={rischiSpeciali.section1.image}
      />
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {rischiSpeciali.section2.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full">
            <p>{rischiSpeciali.section2.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Link to="/contattaci">
                <Button>{rischiSpeciali.section2.button}</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={rischiSpeciali.section2.image.src}
              className="max-w-lg object-cover"
              alt={rischiSpeciali.section2.image.alt}
            />
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative bg-blue-400 text-white">
        <div className="h-full">
          <div className="flex justify-center flex-col items-center h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {rischiSpeciali.section3.title}
            </h1>
            <p>{rischiSpeciali.section3.body}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mt-8 grid grid-cols-1 max-w-5xl md:grid-cols-4 sm:grid-cols-2 bg-white text-blue-800">
            {rischiSpeciali.section3.list.map((el, i) => (
              <div
                key={i}
                className="border border-black flex flex-col items-center p-4"
              >
                <h1 className="font-bold">{el.title}</h1>
                <p>{el.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex gap-12 justify-center items-center h-full flex-col">
            <h1 className=" text-xl italic text-center">
              {rischiSpeciali.section4.title}
            </h1>
            <Link to="/contattaci">
              <Button>{rischiSpeciali.section4.button}</Button>
            </Link>
            <h1 className="text-lg text-center">
              {rischiSpeciali.section4.data}
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RischiSpeciali;
