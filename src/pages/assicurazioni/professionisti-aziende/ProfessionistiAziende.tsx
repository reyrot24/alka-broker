import { Link } from "react-router-dom";
import Layout from "../../../Layout";
import { Header } from "../../../components/sections/Header";
import { professionistiAziende } from "../../../constants/content";
import { Button } from "../../../components/ui/button";

const ProfessionistiAziende = () => {
  return (
    <Layout>
      <Header
        heading={professionistiAziende.section1.title}
        image={professionistiAziende.section1.image}
      />
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {professionistiAziende.section2.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full">
            <p>{professionistiAziende.section2.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Link to="/contattaci">
                <Button>{professionistiAziende.section2.button}</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={professionistiAziende.section2.image.src}
              className="max-w-lg object-cover"
              alt={professionistiAziende.section2.image.alt}
            />
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {professionistiAziende.section3.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="flex justify-center">
            <img
              src={professionistiAziende.section3.image.src}
              className="max-w-md object-cover"
              alt={professionistiAziende.section3.image.alt}
            />
          </div>
          <div className="h-full">
            <p>{professionistiAziende.section3.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Link to="/contattaci">
                <Button>{professionistiAziende.section3.button}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium">
              {professionistiAziende.section4.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full">
            <p>{professionistiAziende.section4.body}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Link to="/contattaci">
                <Button>{professionistiAziende.section4.button}</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={professionistiAziende.section4.image.src}
              className="max-w-lg object-cover"
              alt={professionistiAziende.section4.image.alt}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfessionistiAziende;
