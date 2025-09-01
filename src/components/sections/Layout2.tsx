import { Button } from "../ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: { title: string; link: string }[];
  image: ImageProps;
};

export type Layout2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout2 = (props: Layout2Props) => {
  const { heading, description, buttons, image } = {
    ...Layout2Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="rb-5 mb-5 text-5xl font-bold ">{heading}</h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Layout2Defaults: Props = {
  heading: "Broker di assicurazioni: oltre vent’anni di RC auto",
  description:
    "La nostra esperienza professionale più significativa, è legata all’attività di broker di assicurazioni. ABY Broker opera da più di vent’anni nel settore dell’intermediazione assicurativa e ha raggiunto una posizione di leader tra i vari broker del mercato Italiano. Tra i diversi rami assicurativi, abbiamo brillantemente operato nel settore della responsabilità civile auto. La sfida che abbiamo da sempre affrontato, è quella di operare a stretto contatto con le principali compagnie assicurative che potessero dare la massima qualità e le coperture più indicate alle situazioni specifiche dei nostri clienti. Inoltre, la nostra attenzione si è sempre rivolta verso quei prodotti e servizi che potessero dare ai nostri clienti il massimo valore aggiunto in risparmio e convenienza. Se anche tu desideri metterci alla prova e vuoi avere maggiori informazioni sui nostri servizi, richiedi un preventivo gratuito e senza impegno. Basta un semplice click al pulsante qui sotto!",
  buttons: [{ title: "Trova un Aby Point", link: "/contattaci" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
