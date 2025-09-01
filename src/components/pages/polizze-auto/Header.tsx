type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header5 = (props: Header5Props) => {
  const { heading, image } = {
    ...Header5Defaults,
    ...props,
  };
  return (
    <section id="relume" className="mt-[80px] px-[5%] py-16  h-96 relative">
      <div>
        <img
          src={image.src}
          className="absolute inset-0 size-full object-cover -z-10"
          alt={image.alt}
        />
      </div>
      <div className="container h-full">
        <div className="flex justify-center items-end h-full">
          <h1 className="text-5xl font-bold ">{heading}</h1>
        </div>
      </div>
    </section>
  );
};

export const Header5Defaults: Props = {
  heading: "Medium length hero heading goes here",

  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
