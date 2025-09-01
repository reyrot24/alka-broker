import { RichiediPreventivo } from "./RichiediPreventivo";
import Layout from "../../../Layout";
import { Header } from "../../../components/sections/Header";
import { polizzeAuto } from "../../../constants/content";

const PolizzeAuto = () => {
  return (
    <Layout>
      <Header
        heading={polizzeAuto.section1.title}
        image={polizzeAuto.section1.image}
      />
      <RichiediPreventivo />
      <section
        id="statistiche"
        className="px-[5%] py-16 md:py-24 lg:py-28 w-full"
      >
        <div className="container w-full">
          <div className="flex flex-col items-center w-full">
            <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
              <div className="w-full">
                <h1 className="mb-5 text-4xl font-medium ">
                  {polizzeAuto.section3.title}
                </h1>
                <p className="md:text-md">{polizzeAuto.section3.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 w-full relative">
        <div>
          <img
            src={polizzeAuto.section3.statistiche.image.src}
            className=" inset-0 absolute size-full object-cover -z-10"
            alt={polizzeAuto.section3.statistiche.image.alt}
          />
        </div>
        <div className="h-full">
          <div className="flex justify-center h-full flex-col w-full">
            <h1 className="text-4xl font-medium text-center">
              {polizzeAuto.section3.statistiche.title}
            </h1>
            <div className="grid grid-cols-2 text-center mt-8 md:grid-cols-4 w-full">
              {polizzeAuto.section3.statistiche.array.map((stat) => (
                <div className="flex flex-col">
                  <h1 className="mb-5 text-4xl font-semibold ">
                    {stat.number}
                  </h1>
                  <p className="md:text-md ">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolizzeAuto;
