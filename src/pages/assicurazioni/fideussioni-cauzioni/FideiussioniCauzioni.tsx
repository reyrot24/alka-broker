import { Link } from "react-router-dom";
import Layout from "../../../Layout";
import { Header } from "../../../components/sections/Header";
import { fideiussioniCauzioni } from "../../../constants/content";
import { Button } from "../../../components/ui/button";

const FideiussioniCauzioni = () => {
  return (
    <Layout>
      <Header
        heading={fideiussioniCauzioni.section1.title}
        image={fideiussioniCauzioni.section1.image}
      />
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {fideiussioniCauzioni.section2.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full text-justify">
            <p>{fideiussioniCauzioni.section2.body}</p>
            <div className="w-full mt-4 flex justify-center">
              <Link to="/contattaci">
                <Button>{fideiussioniCauzioni.section2.button}</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-start">
            <img
              src={fideiussioniCauzioni.section2.image.src}
              className="h-96 object-cover"
              alt={fideiussioniCauzioni.section2.image.alt}
            />
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative ">
        <div className="h-full text-justify flex justify-center flex-col">
          <p>{fideiussioniCauzioni.section3.body}</p>
          <div className="flex justify-center">
            <ul className="text-justify max-w-5xl list-disc space-y-3">
              {fideiussioniCauzioni.section3.list.map((item, index) => (
                <li key={index}>
                  <strong>{item.bold}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {fideiussioniCauzioni.section4.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-4">
          <div className="flex justify-center">
            <img
              src={fideiussioniCauzioni.section4.image.src}
              className="max-w-md object-cover"
              alt={fideiussioniCauzioni.section4.image.alt}
            />
          </div>
          <div className="h-full ">
            <h5 className="text-left max-w-5xl mb-4">
              {fideiussioniCauzioni.section4.body.body}
            </h5>
            <ul className="text-justify max-w-5xl list-disc space-y-3">
              {fideiussioniCauzioni.section4.body.list.map((item, index) => (
                <li key={index}>
                  <strong>{item.bold}</strong> {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Link to="/contattaci">
                <Button>{fideiussioniCauzioni.section4.button}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FideiussioniCauzioni;
