import { Link } from "react-router-dom";
import Layout from "../../../Layout";
import { Header } from "../../../components/sections/Header";
import { personeFamiglia } from "../../../constants/content";
import { Button } from "../../../components/ui/button";

const PersoneFamiglia = () => {
  return (
    <Layout>
      <Header
        heading={personeFamiglia.section1.title}
        image={personeFamiglia.section1.image}
      />
      <section id="hero" className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {personeFamiglia.section2.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full text-justify">
            <p>{personeFamiglia.section2.body}</p>
            <div className="w-full mt-4 flex justify-center">
              <Link to="/contattaci">
                <Button>{personeFamiglia.section2.button}</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-start">
            <img
              src={personeFamiglia.section2.image.src}
              className="h-96 object-cover"
              alt={personeFamiglia.section2.image.alt}
            />
          </div>
        </div>
      </section>
      <section id="banner" className="text-center w-full bg-blue-400 py-8">
        {personeFamiglia.section3}
      </section>
      <section
        id="assicurazioniFamiglia"
        className="px-[5%] py-16 relative space-y-8"
      >
        <div className="h-full">
          <div className="flex justify-center flex-col items-center gap-4 h-full">
            <h1 className="text-4xl font-medium text-center">
              {personeFamiglia.section4.title}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-12 items-center">
          {personeFamiglia.section4.assicurazioni.map((assicurazione, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center border py-4 gap-4"
            >
              <div
                className="flex  flex-col py-4 gap-4 justify-center max-w-5xl items-center md:grid md:grid-cols-2"
                key={i}
              >
                <div className="flex justify-center">
                  <img
                    src={assicurazione.image.src}
                    alt={assicurazione.image.alt}
                    className="w-80"
                  />
                </div>
                <div className="text-center md:text-center md:mr-10">
                  <h1 className="text-3xl font-bold ">{assicurazione.title}</h1>
                  <p>{assicurazione.description}</p>
                </div>
              </div>
              <div>
                <Link to="/">
                  <Button>{assicurazione.button}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PersoneFamiglia;
