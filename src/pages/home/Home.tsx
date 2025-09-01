import { Link } from "react-router-dom";
import { Carousell } from "../../components/carousell/Carousel";
import { home } from "../../constants/content";
import Layout from "../../Layout";
import { Button } from "../../components/ui/button";

const Home = () => {
  return (
    <Layout>
      <header className="mt-[80px] h-full">
        <Carousell />
      </header>
      <section id="section1" className="px-[5%] py-16 md:py-24 lg:py-28 w-full">
        <div className="container w-full">
          <div className="flex flex-col items-center w-full">
            <div className="rb-12 text-center ">
              <div className="w-full ">
                <h1 className="mb-5 text-4xl font-medium ">
                  {home.section1.title}
                </h1>
                <p className="md:text-md">{home.section1.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section2" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div className="text-center">
              <h1 className="rb-5 mb-5 text-4xl font-medium ">
                {home.section2.title}
              </h1>
              <p className="md:text-md">{home.section2.body}</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                <Link to="/contattaci">
                  <Button>{home.section2.button}</Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src={home.section2.image.src}
                className="w-full object-cover"
                alt={home.section2.image.alt}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="section3" className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div className="order-2 md:order-1">
              <img
                src={home.section3.image.src}
                className="w-full object-cover"
                alt={home.section3.image.alt}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="rb-5 mb-5 text-4xl font-medium ">
                {home.section3.title}
              </h2>
              <p className="md:text-md">{home.section3.body}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
                <Link to="/contattaci">
                  <Button>{home.section3.button}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*   <Blog33 /> */}
    </Layout>
  );
};

export default Home;
