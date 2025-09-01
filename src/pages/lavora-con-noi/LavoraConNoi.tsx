import { Link } from "react-router-dom";
import { Header } from "../../components/sections/Header";
import { lavoraConNoi } from "../../constants/content";
import Layout from "../../Layout";
import { Button } from "../../components/ui/button";

const LavoraConNoi = () => {
  return (
    <Layout>
      <Header
        heading={lavoraConNoi.section1.title}
        image={lavoraConNoi.section1.image}
      />
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {lavoraConNoi.section2.title}
            </h1>
            <p>{lavoraConNoi.section2.body}</p>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full">
            <h1 className="mb-5 text-4xl text-center font-medium ">
              {lavoraConNoi.section3.title}
            </h1>
            <p>{lavoraConNoi.section3.body}</p>
            <div className="w-full mt-4 flex justify-center">
              <Link to="/contattaci">
                <Button>{lavoraConNoi.section3.button}</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-start">
            <img
              src={lavoraConNoi.section3.image.src}
              className="h-96 object-cover"
              alt={lavoraConNoi.section3.image.alt}
            />
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="flex justify-center items-start">
            <img
              src={lavoraConNoi.section4.image.src}
              className="h-96 object-cover"
              alt={lavoraConNoi.section4.image.alt}
            />
          </div>
          <div className="h-full">
            <h1 className="mb-5 text-4xl text-center font-medium ">
              {lavoraConNoi.section4.title}
            </h1>
            <p>{lavoraConNoi.section4.body}</p>
            <div className="w-full mt-4 flex justify-center">
              <Link to="/contattaci">
                <Button>{lavoraConNoi.section4.button}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LavoraConNoi;
