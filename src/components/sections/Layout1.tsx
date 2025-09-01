import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Button = {
  title: string;
  link: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: Button[];
  image: ImageProps;
};

type Layout1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout1 = (props: Layout1Props) => {
  const { heading, description, buttons, image } = {
    ...Layout1Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-5xl font-bold ">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Link to={button.link}>
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

//!!Aggiungere il link al pulsante come nelle altre pagine

const Layout1Defaults: Props = {
  heading: "Un punto vendita vicino a te!",
  description:
    "La rete distributiva di ABY, broker di assicurazioni, conta 46 punti vendita e numerosi intermediari dislocati in molte località del territorio Italiano. Inoltre, ogni anno, vengono aperti diversi punti vendita e assistenza grazie ad una attiva ricerca di nuovi collaboratori. Nella mappa che troverai cliccando il pulsante qui sotto, potrai cercare l’ABY Point oppure l’ABY Partner più vicino a te. Vieni a trovarci per toccare con mano qualità, la convenienza e il risparmio su una grande varietà di prodotti e servizi.",
  buttons: [{ title: "Richiedi subito un preventivo", link: "/contattaci" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
