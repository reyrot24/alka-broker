import { Mail, Phone } from "lucide-react";

import { Form } from "./Form";
import type { ReactNode } from "react";
import Layout from "../../Layout";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  section1: {
    heading: string;
    image: ImageProps;
    body: { heading: string; p: string };
  };
  section2: {
    heading: string;
  };
  section3: {
    heading: string;
    contatti: {
      heading: string;
      icon: ReactNode;
      info: string;
    }[];
  };
};

export type ContattaciProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const Contattaci = (props: ContattaciProps) => {
  const { section1, section2, section3 } = {
    ...ContattaciDefaults,
    ...props,
  };
  return (
    <Layout>
      <section className="mt-[80px] px-[5%] py-16  h-96 relative">
        <div>
          <img
            src={section1.image.src}
            className="absolute inset-0 size-full object-cover -z-10"
            alt={section1.image.alt}
          />
        </div>
        <div className="container h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="text-4xl font-bold ">{section1.heading}</h1>
          </div>
        </div>
      </section>
      <div className="flex justify-center flex-col items-center w-full my-8">
        <div>
          <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
            {section1.body.heading}
          </h1>
        </div>
        <div className="max-w-lg text-center">
          <p>{section1.body.p}</p>
        </div>
      </div>
      <section className="px-[5%] py-16 relative space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center">
            <h1 className="mb-5 text-4xl font-bold md:mb-6">
              {section2.heading}
            </h1>
            <Form />
          </div>
          <div className="text-center bg-slate-200">
            <h1 className="mb-5 text-4xl font-bold md:mb-6 ">
              {section3.heading}
            </h1>
            <div className="flex flex-col gap-8">
              {section3.contatti.map((contatto) => (
                <div className="flex m-4 w-full items-start text-left gap-8">
                  <div className="border border-black p-6 rounded">
                    {contatto.icon}
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="font-bold">{contatto.heading}</h1>
                    <p>{contatto.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contattaci;

const ContattaciDefaults: Props = {
  section1: {
    heading: "",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image",
    },
    body: {
      heading: "Contattaci, ti rispondiamo a breve!",
      p: "In questa pagina trovi indicate tutte le modalità per metterti in contatto con noi. Contattaci, la tua richiesta sarà smistata ai nostri operatori di sede o nei punti vendita locali che sapranno rispondere alle tue richieste, rispondere a tutti i tuoi quesiti e consigliarti i migliori prodotti e le migliori offerte disponibili! In alternativa, puoi venire a trovarci in uno dei nostri punti vendita sparsi in tutto il territorio nazionale,  qui trovi la mappa per individuare il punto vendita a te più vicino.",
    },
  },
  section2: {
    heading: "Contattaci col modulo di richiesta informazioni",
  },
  section3: {
    heading: "Contattaci telefonici",
    contatti: [
      {
        heading: "Numero",
        icon: <Phone size={30} />,
        info: "800 932 493",
      },
      {
        heading: "Whatsapp",
        icon: <Phone color="green" size={30} />,
        info: "378 302 7333",
      },
      {
        heading: "Email",
        icon: <Mail size={30} />,
        info: "prontoaby@abyone.it",
      },
    ],
  },
};
