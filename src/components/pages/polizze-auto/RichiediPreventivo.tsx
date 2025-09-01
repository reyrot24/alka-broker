"use client";

import { useState } from "react";
import { Button, type ButtonProps } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

type Props = {
  heading: string;

  button: ButtonProps;
};

export type Contact1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const RichiediPreventivo = (props: Contact1Props) => {
  const { heading, button } = {
    ...Contact1Defaults,
    ...props,
  };

  const [form, setForm] = useState({
    targa: "",
    dataNascita: "",
    residenza: "",
    cellulare: "",
  });

  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-5xl">
            {heading}
          </h2>
        </div>
        <form
          className="mx-auto grid w-full max-w-md grid-cols-1 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full items-center">
            <Label htmlFor="targa" className="mb-2">
              Targa
            </Label>
            <Input
              type="text"
              id="targa"
              value={form.targa}
              onChange={(e) => setForm({ ...form, targa: e.target.value })}
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="data-di-nascita" className="mb-2">
              Data di nascita
            </Label>
            <Input
              type="date"
              id="data-di-nascita"
              value={form.dataNascita}
              onChange={(e) =>
                setForm({ ...form, dataNascita: e.target.value })
              }
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="provincia-residenza" className="mb-2">
              Provincia di residenza
            </Label>
            <Input
              type="text"
              id="provincia-residenza"
              value={form.residenza}
              onChange={(e) => setForm({ ...form, residenza: e.target.value })}
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="cellulare" className="mb-2">
              Cellulare
            </Label>
            <Input
              type="text"
              id="cellulare"
              value={form.cellulare}
              onChange={(e) => setForm({ ...form, cellulare: e.target.value })}
            />
          </div>

          <div className="mb-3 flex items-start  space-x-2 text-sm md:mb-4">
            <Checkbox
              id="consenso"
              checked={acceptTerms}
              onCheckedChange={setAcceptTerms}
            />
            <Label htmlFor="consenso" className="cursor-pointer">
              La compilazione del form, spontanea e volontaria, comporta
              l’acquisizione dei dati personali dell’utente. I campi indicati
              come obbligatori sono necessari per la sola erogazione del
              servizio previsto: il mancato conferimento dei dati corrispondenti
              comporta l’impossibilità di usufruire di tale servizio. Inviando i
              dati personali si dichiara di aver letto ed accettato i termini
              relativi al trattamento dei dati, contenuti nell’informativa
              redatta ai sensi dell’art. 13 del GDPR 679/2016. Letta
              l’informativa privacy, acconsento al trattamento dei miei dati
              personali per finalità quali invio di informazioni di carattere
              promozionale e commerciale, a mezzo posta o telefono e/o mediante
              comunicazioni elettroniche quali e-mail, fax, messaggi del tipo
              Sms o Mms o con altri sistemi automatizzati in futuro
              implementati, relative a nuove offerte di prodotti o servizi
              proposti da ABY BROKER SRL
            </Label>
          </div>
          <div className="text-center">
            <Button {...button} type="submit">
              {button.title}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Contact1Defaults: Props = {
  heading: "Richiedi un preventivo RC Auto",
  button: { title: "Submit" },
};
