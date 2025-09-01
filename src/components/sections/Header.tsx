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

export const Header = (props: Header5Props) => {
  const { heading, image } = {
    ...Header5Defaults,
    ...props,
  };
  return (
    <section id="relume" className="mt-[80px]  h-96 relative">
      <div>
        <img
          src={image.src}
          className="absolute inset-0 size-full object-cover -z-10"
          alt={image.alt}
        />
      </div>
      <div className="flex h-full items-end">
        <div className=" p-4 w-full bg-black/15">
          <div className="flex justify-center items-end h-full">
            <h1 className="text-5xl font-medium">{heading}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

const Header5Defaults: Props = {
  heading: "Medium length hero heading goes here",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
