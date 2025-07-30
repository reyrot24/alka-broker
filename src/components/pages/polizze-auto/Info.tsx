type ImageProps = {
  src: string;
  alt?: string;
};

type statistiche = {
  number: string;
  desc: string;
};

type Props = {
  section1: {
    heading: string;
    body: string;
  };
  section2: {
    heading: string;
    image: ImageProps;
    statistiche: statistiche[];
  };
};

export type InfoProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const Info = (props: InfoProps) => {
  const { section1, section2 } = {
    ...InfoDefaults,
    ...props,
  };
  return (
    <>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 w-full">
        <div className="container w-full">
          <div className="flex flex-col items-center w-full">
            <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
              <div className="w-full">
                <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                  {section1.heading}
                </h1>
                <p className="md:text-md">{section1.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 w-full relative">
        <div>
          <img
            src={section2.image.src}
            className=" inset-0 absolute size-full object-cover -z-10"
            alt={section2.image.alt}
          />
        </div>
        <div className="h-full">
          <div className="flex justify-center h-full flex-col w-full">
            <h1 className="text-4xl font-bold text-center">
              {section2.heading}
            </h1>
            <div className="grid grid-cols-2 text-center mt-8 md:grid-cols-4 w-full">
              {section2.statistiche.map((stat) => (
                <div className="flex flex-col">
                  <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-6xl">
                    {stat.number}
                  </h1>
                  <p className="md:text-md ">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;

export const InfoDefaults: Props = {
  section1: {
    heading: "Polizze auto: perché scegliere Aby per il tuo veicolo",
    body: "Dal 2002 ci occupiamo di brokeraggio assicurativo nel campo delle polizze auto. Siamo cresciuti nel tempo sino ad acquisire un posto tra i primi broker assicurativi del mercato Italiano. Contiamo oltre 100.000 clienti, 48 punti vendita di proprietà e oltre 1000 partners dislocati in numerosi centri urbani Italiani. Aby Broker, agisce su mandato del cliente e offre il meglio tra i prodotti assicurativi di oltre 50 primarie compagnie con le quali, nel tempo, abbiamo sviluppato rapporti privilegiati.",
  },
  section2: {
    heading:
      "Con Aby Broker puoi risparmiare senza rinunciare alla tua sicurezza",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image",
    },
    statistiche: [
      {
        number: "107.000",
        desc: "Clienti soddisfatti",
      },
      {
        number: "35",
        desc: "Compagnie assicurative primarie",
      },
      {
        number: "48",
        desc: "Punti vendita di proprietà",
      },
      {
        number: "1000",
        desc: "Partners nella rete di collaboratori",
      },
    ],
  },
};
