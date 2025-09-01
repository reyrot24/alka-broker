"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import type { ButtonProps } from "../../ui/button";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type FooterLink = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type Props = {
  logo: ImageProps;
  newsletterDescription: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
  info: string;
  footerText: string;
  footerLinks: FooterLink[];
  socialMediaLinks: SocialMediaLinks[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Footer4 = (props: Footer4Props) => {
  const { logo, socialMediaLinks, info, footerText, footerLinks } = {
    ...Footer4Defaults,
    ...props,
  };

  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20 border-t">
      <div className="container">
        <div className="flex flex-col items-center gap-16 md:flex-col lg:flex lg:flex-col xl:flex-row lg:justify-between lg:pb-20 pb-12 md:pb-18">
          <div className="">
            <a href={logo.url} className="mb-5 md:mb-6">
              <img src={logo.src} alt={logo.alt} className="inline-block " />
            </a>
          </div>

          <div className="flex items-center justify-start gap-x-3 ">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-4">{info}</div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
          <p className="mt-6 md:mt-0">{footerText}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            {footerLinks.map((link, index) => (
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

export const Footer4Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  newsletterDescription:
    "Join our newsletter to stay up to date on features and releases.",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Subscribe",
    variant: "secondary",
    size: "sm",
  },
  info: `Copyright © 2024
ABY proprietà di Aby Broker Srl - Codice Fiscale/Partita IVA 00803170141
Capitale Sociale 1.000.000€ i.v.
Numero REA: MS-120836 - Iscrizione RUI: B000137063
Iscrizione al Registro delle Imprese di Massa Carrara: 00803170141
Sede Legale: Via Gandhi 8 - 54011 Aulla
Sedi Operative: Via Gandhi 8 - 54011 Aulla (MS) / Via del Salsero 99 - 51016 Montecatini Terme (PT)
Autorità competente alla vigilanza sull'attività: IVASS Via del Quirinale, 21 - 00187 Roma`,
  termsAndConditions: `
  <p class='text-xs'>
    By subscribing you agree to with our
    <a href='#' class='underline'>Privacy Policy</a>
    and provide consent to receive updates from our company.
  </p>
  `,
  socialMediaLinks: [
    { url: "#", icon: <Facebook className="size-6" /> },
    { url: "#", icon: <Instagram className="size-6" /> },
    { url: "#", icon: <Twitter className="size-6 p-0.5" /> },
    { url: "#", icon: <Linkedin className="size-6" /> },
    { url: "#", icon: <Youtube className="size-6" /> },
  ],
  footerText: "© 2024 Relume. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
