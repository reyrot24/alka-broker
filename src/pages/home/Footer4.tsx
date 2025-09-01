import { footer } from "../../constants/content";

export const Footer4 = () => {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 border-t">
      <div className="container">
        <div className="flex flex-col items-center gap-16 md:flex-col lg:flex lg:flex-col xl:flex-row lg:justify-between lg:pb-20 pb-12 md:pb-18">
          <div className="">
            <a href={footer.logo.url} className="mb-5 md:mb-6">
              <img
                src={footer.logo.src}
                alt={footer.logo.alt}
                className="inline-block "
              />
            </a>
          </div>

          <div className="flex items-center justify-start gap-x-3 ">
            {footer.socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-4">{footer.info}</div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">{footer.footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footer.footerLinks.map((link, index) => (
              <li key={index} className="underline">
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
