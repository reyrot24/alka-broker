import { useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { Checkbox } from "../../ui/checkbox";

type Props = {
  heading: string;
};

export type RichiestaInformazioniProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const RichiestaInformazioni = (props: RichiestaInformazioniProps) => {
  const { heading } = {
    ...RichiestaInformazioniDefaults,
    ...props,
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    cellulare: "",
    messaggio: "",
    acceptTerms: false,
  });

  return (
    <section className="px-[5%] py-16 relative">
      <div className="h-full">
        <div className="flex justify-center items-end h-full">
          <h1 className="text-4xl font-bold ">{heading}</h1>
        </div>
        <form className="mx-auto mt-8 grid w-full max-w-lg grid-cols-1 gap-6">
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          <div className="grid w-full items-center">
            <Label htmlFor="messaggio" className="mb-2">
              Messaggio
            </Label>
            <Textarea
              id="messaggio"
              placeholder="Type your message here."
              value={form.messaggio}
              onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
            />
          </div>
          <div className="mb-3 flex items-start  space-x-2 text-sm md:mb-4">
            <Checkbox
              id="consenso"
              checked={form.acceptTerms}
              onCheckedChange={(checked) =>
                setForm({ ...form, acceptTerms: checked ? true : false })
              }
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
              l’informativa privacy, Acconsento al trattamento dei miei dati
              personali per finalità quali invio di informazioni di carattere
              promozionale e commerciale, a mezzo posta o telefono e/o mediante
              comunicazioni elettroniche quali e-mail, fax, messaggi del tipo
              Sms o Mms o con altri sistemi automatizzati in futuro
              implementati, relative a nuove offerte di prodotti o servizi
              proposti da ABY SERVIZI SRL
            </Label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RichiestaInformazioni;

const RichiestaInformazioniDefaults: Props = {
  heading: "Richiesta informazioni",
};
