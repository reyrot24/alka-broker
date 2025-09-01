import Layout from "../../Layout";
import { Header } from "../../components/sections/Header";
import { chiSiamo } from "../../constants/content";

const ChiSiamo = () => {
  return (
    <Layout>
      <Header
        heading={chiSiamo.section1.title}
        image={chiSiamo.section1.image}
      />
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {chiSiamo.section2.title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full text-justify">
            <p>{chiSiamo.section2.body}</p>
          </div>
          <div className="flex justify-center items-start">
            <img
              src={chiSiamo.section2.image.src}
              className="h-96 object-cover"
              alt={chiSiamo.section2.image.alt}
            />
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="mb-5 text-4xl font-medium ">
              {chiSiamo.section3.title}
            </h1>
            <p>{chiSiamo.section3.body}</p>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <h1 className="mb-5 text-4xl text-center font-medium ">
          {chiSiamo.section4.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full">
            <p>{chiSiamo.section4.body}</p>
          </div>
          <div className="flex justify-center items-start">
            <img
              src={chiSiamo.section4.image.src}
              className="h-96 object-cover"
              alt={chiSiamo.section4.image.alt}
            />
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative">
        <h1 className="mb-5 text-4xl text-center font-medium ">
          {chiSiamo.section5.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="flex justify-center items-start">
            <img
              src={chiSiamo.section5.image.src}
              className="h-96 object-cover"
              alt={chiSiamo.section5.image.alt}
            />
          </div>
          <div className="h-full">
            <p>{chiSiamo.section5.body}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChiSiamo;
