import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

type Props = {
  heading: string;
  email: string;
  questions: { title: string; answer: string }[];
};

export type RichiestaInformazioniProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const Faqs = (props: RichiestaInformazioniProps) => {
  const { heading, email, questions } = {
    ...FAQsDefaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 relative bg-amber-100">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-4xl font-bold md:mb-6">{heading}</h2>
          <p className="md:text-md">{email}</p>
        </div>
        <Accordion type="single">
          {questions.map((question, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="md:py-5 md:text-md">
                {question.title}
              </AccordionTrigger>
              <AccordionContent className="md:pb-6">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;

const FAQsDefaults: Props = {
  heading: "Domande frequenti",
  email: "Contattaci per ulteriori chiarimenti: apa-aulla@abyservizi.it",
  questions: [
    {
      title: "Cosa fanno le agenzie pratiche auto?",
      answer:
        "Le agenzie pratiche auto, grazie alla preparazione professionale dei propri dipendenti, offrono consulenze professionali multiservizi per disbrigare pratiche documentali per la circolazione dei veicoli.",
    },
    {
      title: "Rinnovo patente: quanto tempo prima?",
      answer:
        "La patente può essere rinnovata a partire da quattro mesi prima della data di scadenza indicata sul documento ovvero riportata al punto 4b.",
    },
    {
      title: "Quando si paga il bollo auto?",
      answer:
        "Deve essere pagato nel momento in cui si diventa proprietari di un veicolo in base alla trascrizione al PRA esistente nell’ultimo giorno del periodo d’imposta. Non è possibile trasportare il bollo pagato su una nuova auto.",
    },
    {
      title: "Come funziona l'immatricolazione auto / moto?",
      answer:
        "Dell’immatricolazione se ne occupa il venditore tramite una agenzia di pratiche auto abilitata. Il venditore presenta una richiesta all’ufficio provinciale della Motorizzazione Civile con una serie di documenti a corredo relativi alla persona che diverrà il nuovo proprietario.",
    },
    {
      title: "Passaggio di proprietà auto: quanto ci vuole?",
      answer:
        "I tempi necessari al passaggio di proprietà sono estremamente veloci. Presentando la domanda tramite un ufficio di pratiche auto che, recandosi presso una delegazione ACI, può ottenere il trasferimento in pochi minuti.",
    },
    {
      title: "Bollo auto scaduto: cosa succede?",
      answer:
        "Se il bollo auto è scaduto, assieme al pagamento, sarà necessario corrispondere interessi e sanzioni per ciascun giorno di ritardo, per la precisione: entro 14 giorni dalla scadenza sanzione pari allo 0,1% dell’importo per ogni giorno di ritardo; tra il 15° e il 30° giorno, sanzione pari all’ 1,50% dell’importo più interessi legali giornalieri del 0.3%; tra il 31° e il 90° giorno, sanzione pari all’ 1,67% dell’importo più interessi legali giornalieri del 0.3%; tra il 91° e 1 anno, sanzione pari all’ 3,75% dell’importo più interessi legali giornalieri del 0.3%; oltre 1 anno, sanzione pari al 30% più interessi giornalieri pari all’ 1% per ogni semestre di ritardo maturato.",
    },
  ],
};
