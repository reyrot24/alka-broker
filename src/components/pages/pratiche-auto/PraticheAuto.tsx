import Layout from "../../../Layout";
import Faqs from "./Faqs";
import RichiestaInformazioni from "./RichiestaInformazioni";

type ImageProps = {
  src: string;
  alt?: string;
};

type Section = {
  heading: string;
  body: string;
  image: ImageProps;
};

type Props = {
  section1: {
    heading: string;
    image: ImageProps;
  };
  section2: {
    heading: string;
    body: string;
    image: ImageProps;
  };
  section3: {
    heading: string;
    body: string;
    servizi: Section[];
  };
};

export type PraticheAutoProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const PraticheAuto = (props: PraticheAutoProps) => {
  const { section1, section2, section3 } = {
    ...PraticheAutoDefaults,
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
      <section className="px-[5%] py-16 relative">
        <div className="h-full">
          <div className="flex justify-center items-end h-full">
            <h1 className="text-4xl font-bold ">{section2.heading}</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
          <div className="h-full">
            <p>{section2.body}</p>
          </div>
          <div className="flex justify-center items-start">
            <img
              src={section2.image.src}
              className="h-96 object-cover"
              alt={section2.image.alt}
            />
          </div>
        </div>
      </section>
      <section className="px-[5%] py-16 relative space-y-8">
        <div className="h-full">
          <div className="flex justify-center flex-col items-center gap-4 h-full">
            <h1 className="text-4xl font-bold ">{section3.heading}</h1>
            <p className="text-center">{section3.body}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-12 items-center">
          {section3.servizi.map((servizio, i) => (
            <div
              className="flex border flex-col gap-4 justify-center max-w-5xl items-center md:grid md:grid-cols-2"
              key={i}
            >
              <div className="flex justify-center">
                <img
                  src={servizio.image.src}
                  alt={servizio.image.alt}
                  className="w-80"
                />
              </div>
              <div className="text-center md:text-center md:mr-10">
                <h1 className="text-3xl font-bold ">{servizio.heading}</h1>
                <p>{servizio.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <RichiestaInformazioni />
      <Faqs />
    </Layout>
  );
};

export default PraticheAuto;

export const PraticheAutoDefaults: Props = {
  section1: {
    heading: "Da sempre al fianco dell’automobilista",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image",
    },
  },
  section2: {
    heading: "Agenzia di pratiche auto: di cosa si tratta?",
    body: "L’agenzia di pratiche auto è uno studio professionale che da consulenza su una molteplicità di servizi e si occupa del disbrigo delle pratiche documentali necessarie per la circolazione dei mezzi di trasporto. L’agenzia di pratiche auto, offre una serie di servizi di consulenza e assistenza per varie questioni che interessano la tua automobile e in riferimento a adempimenti prescritti dalla normativa vigente a cui deve sottostare un conducente di un mezzo su strada. Le agenzie di pratiche automobilistiche sono presenti su tutto il territorio nazionale sostituendo nelle loro funzioni le unità territoriali del PRA e della Motorizzazione (DTT) e offrono quindi un aiuto concreto al possessore di un’automobile o di un qualsiasi altro mezzo di circolazione. Al fi fine di diversificare i servizi di utilità rivolti al pubblico, ABY Broker ha deciso di iniziare un nuovo percorso a supporto degli automobilisti per offrire loro servizi completi ed efficaci.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image",
    },
  },
  section3: {
    heading: "I servizi che offriamo",
    body: "ABY Broker, per completare i servizi assicurativi RC Auto legati al settore veicoli, ha deciso di offrire i servizi di pratiche auto direttamente all’interno degli Aby Point, i punti vendita dislocati in gran parte del territorio Italiano. Questa offerta, permette ai nostri clienti di disporre di un’ampia varietà di servizi collegati ai veicoli, come ad esempio:",
    servizi: [
      {
        heading: "Immatricolazione auto e moto",
        body: "L’immatricolazione di un veicolo, nell’ambito della normativa vigente, è una procedura telematica che abilita alla circolazione su strada. Nei nostri punti vendita, trovi personale preparato addetto all’espletamento di qualsiasi tipo di immatricolazione.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Relume placeholder image",
        },
      },
      {
        heading: "Visure PRA",
        body: "Una visura è un documento richiesto dall’archivio del Pubblico Registro Automobilistico (PRA) o alla Motorizzazione Civile, che riporta informazioni relative ai veicoli ed eventuali annotazioni. Se ti occorresse questo tipo di documento o se avessi domande specifiche, puoi rivolgerti ai nostri addetti nel punto vendita più vicino a te.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Relume placeholder image",
        },
      },
      {
        heading: "Bollo auto",
        body: "Il bollo auto è una tassa legata al possesso di un veicolo. Fatte salve particolari condizioni, deve essere corrisposto ogni anno. Per avere informazioni più dettagliate sul rinnovo del bollo auto della tua autovettura o della tua moto, puoi rivolgerti ai nostri addetti nel punto vendita più vicino a te.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Relume placeholder image",
        },
      },
      {
        heading: "Pratiche per patenti di guida",
        body: "Quanto tempo prima devo prenotare il rinnovo patente? Con Aby la gestione delle pratiche patenti è molto semplice: rivolgiti a uno dei nostri punti vendita, dal rinnovo patente al duplicato della patente, gestiamo tutte le tue esigenze liberandoti da qualsiasi pensiero.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Relume placeholder image",
        },
      },
      {
        heading: "Passaggi di proprietà",
        body: "Il Passaggio di Proprietà è l’atto attraverso il quale si trasferisce la titolarità di un veicolo da un soggetto ad un altro. Presso punti vendita Aby, potrai effettuare: Passaggio di Proprietà Auto, Passaggio di Proprietà Moto e Scooter, Passaggio di Proprietà non intestatario, Eredità, Atti Societari, Ravvedimenti Operosi.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Relume placeholder image",
        },
      },
    ],
  },
};
