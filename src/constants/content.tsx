import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const navbar = {
  logo: {
    url: "/",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  navLinks: [
    {
      title: "Assicurazioni",
      url: "#",
      subMenuLinks: [
        { title: "Polizze auto", url: "/assicurazioni/polizze-auto" },
        { title: "Persone e famiglia", url: "/assicurazioni/persone-famiglia" },
        {
          title: "Professionisti e aziende",
          url: "/assicurazioni/professionisti-aziende",
        },
        {
          title: "Fideiussioni e cauzioni",
          url: "/assicurazioni/fiduiussioni-cauzioni",
        },
        { title: "Rischi speciali", url: "/assicurazioni/rischi-speciali" },
      ],
    },
    { title: "Energia", url: "#" },
    { title: "Noleggio a lungo termine", url: "#" },
    { title: "Pratiche auto", url: "/pratiche-auto" },
    { title: "Lavora con noi", url: "/lavora-con-noi" },
    { title: "Chi siamo", url: "/chi-siamo" },
  ],
  button: {
    title: "Contattaci",
    size: "sm",
  },
};

export const footer = {
  logo: {
    url: "/",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  socials: [
    { url: "#", icon: <Facebook className="size-6" /> },
    { url: "#", icon: <Instagram className="size-6" /> },
    { url: "#", icon: <Twitter className="size-6 p-0.5" /> },
    { url: "#", icon: <Linkedin className="size-6" /> },
    { url: "#", icon: <Youtube className="size-6" /> },
  ],
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

export const home = {
  carousellImages: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  ],
  section1: {
    title: "ABY: non soltanto broker di assicurazioni!",
    body: "ABY è un broker di assicurazioni nato oltre venti anni fa. Abbiamo sempre offerto ai nostri clienti polizze e servizi delle primarie compagnie assicurative. Nel tempo, ci siamo guadagnati una posizione tra i leader del mercato assicurativo Italiano. La nostra rete distributiva è cresciuta fino a raggiungere una diffusa presenza sul territorio Italiano. I nostri punti vendita, chiamati ABY Point, sono la punta di diamante di questa rete distributiva. Nel tempo, la nostra offerta si è evoluta per adattarsi alle esigenze dei nostri clienti. Infatti, nei nostri ABY Point potrai trovare, in un colpo solo, tutte le nostre soluzioni: servizi assicurativi, servizi energia e servizi di pratiche auto. Tutto questo in un unico punto vendita dove potrai trovare i nostri operatori di vendita e assistenza sempre a tua completa disposizione! Questa filosofia e questo modello ci hanno ampliamente premiati arrivando a contare, ad oggi, oltre 100.000 clienti soddisfatti!",
  },
  section2: {
    title: "Un punto vendita vicino a te!",
    body: "La rete distributiva di ABY, broker di assicurazioni, conta 46 punti vendita e numerosi intermediari dislocati in molte località del territorio Italiano. Inoltre, ogni anno, vengono aperti diversi punti vendita e assistenza grazie ad una attiva ricerca di nuovi collaboratori. Nella mappa che troverai cliccando il pulsante qui sotto, potrai cercare l’ABY Point oppure l’ABY Partner più vicino a te. Vieni a trovarci per toccare con mano qualità, la convenienza e il risparmio su una grande varietà di prodotti e servizi.",
    button: "Richiedi subito un preventivo",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section3: {
    title: "Broker di assicurazioni: oltre vent’anni di RC auto",
    body: "La nostra esperienza professionale più significativa, è legata all’attività di broker di assicurazioni. ABY Broker opera da più di vent’anni nel settore dell’intermediazione assicurativa e ha raggiunto una posizione di leader tra i vari broker del mercato Italiano. Tra i diversi rami assicurativi, abbiamo brillantemente operato nel settore della responsabilità civile auto. La sfida che abbiamo da sempre affrontato, è quella di operare a stretto contatto con le principali compagnie assicurative che potessero dare la massima qualità e le coperture più indicate alle situazioni specifiche dei nostri clienti. Inoltre, la nostra attenzione si è sempre rivolta verso quei prodotti e servizi che potessero dare ai nostri clienti il massimo valore aggiunto in risparmio e convenienza. Se anche tu desideri metterci alla prova e vuoi avere maggiori informazioni sui nostri servizi, richiedi un preventivo gratuito e senza impegno. Basta un semplice click al pulsante qui sotto!",
    button: "Trova un Aby Point",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section4: {
    title: "Short heading goes here",
    news: [
      {
        title: "Blog title heading will go here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      },
    ],
  },
};

export const polizzeAuto = {
  section1: {
    title: "Le nostre soluzioni per il mondo RC Auto",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title: "Richiedi un preventivo RC Auto",
    form: [
      {
        label: "Targa",
        type: "text",
        id: "targa",
      },

      { label: "Data di nascita", type: "date", id: "dataNascita" },
      { label: "Provincia di residenza", type: "text", id: "provincia" },
      { label: "Cellulare", type: "text", id: "cellulare" },
    ],
    acceptTerms: `La compilazione del form, spontanea e volontaria, comporta
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
            proposti da ABY SERVIZI SRL`,

    button: "Richiedi subito un preventivo",
  },
  section3: {
    title: "Polizze auto: perché scegliere Aby per il tuo veicolo",
    body: "Dal 2002 ci occupiamo di brokeraggio assicurativo nel campo delle polizze auto. Siamo cresciuti nel tempo sino ad acquisire un posto tra i primi broker assicurativi del mercato Italiano. Contiamo oltre 100.000 clienti, 48 punti vendita di proprietà e oltre 1000 partners dislocati in numerosi centri urbani Italiani. Aby Broker, agisce su mandato del cliente e offre il meglio tra i prodotti assicurativi di oltre 50 primarie compagnie con le quali, nel tempo, abbiamo sviluppato rapporti privilegiati.",
    statistiche: {
      title:
        "Con Aby Broker puoi risparmiare senza rinunciare alla tua sicurezza",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Placeholder",
      },
      array: [
        {
          number: "107.000",
          text: "Clienti soddisfatti",
        },
        {
          number: "35",
          text: "Compagnie assicurative primarie",
        },
        {
          number: "48",
          text: "Punti vendita di proprietà",
        },
        {
          number: "1000",
          text: "Partners nella rete di collaboratori",
        },
      ],
    },
  },
};

export const personeFamiglia = {
  section1: {
    title: "Aby per la persona e la famiglia",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title: "Assicurazione per la famiglia: fatti consigliare dal broker",
    body: "Affidati alla grande esperienza di ABY per scoprire le varie tipologie di assicurazioni per la famiglia, essere sempre tutelato, e dormire sonni tranquilli. Polizze assicurative per la protezione della salute, polizze contro gli infortuni, polizze sulla casa e per gli animali domestici sono solamente alcune delle opzioni che ti proponiamo. Ti aiuteremo a scegliere le assicurazioni per la famiglia più adatte alla situazione del tuo nucleo familiare ed affrontare con serenità i vari momenti della tua vita e di coloro che ami. Clicca il pulsante qui sotto e lascia i tuoi dati, sarai prontamente ricontattato dai nostri operatori che, senza alcun impegno, ti illustreranno vari prodotti e soluzioni provenienti dalle migliori società assicurative.",
    button: "Contattaci",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section3: (
    <h1 className="text-3xl">
      Per proteggere tutto quello che ami{" "}
      <span className="font-bold">Aby è al tuo fianco </span>con le
      assicurazioni per la famiglia
    </h1>
  ),
  section4: {
    title: "Le assicurazioni per la famiglia più richieste",
    assicurazioni: [
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Casa",
        description:
          "La tua famiglia, i tuoi affetti ed i tuoi beni, vivono tutti sotto lo stesso tetto. Per questo ti offriamo una gamma completa di assicurazioni per la famiglia integrabili tra cui scegliere le tutele più indicate per te, perché la casa è il luogo che desideri proteggere più di ogni altra cosa.",
        button: "Scopri di più",
      },
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Infortuni",
        description:
          "Hai una vita attiva e dinamica, e desideri mantenere la serenità di poter praticare sport, viaggiare per piacere o lavoro, da solo o in compagnia, senza il timore di ritardare i tuoi progetti a causa di un infortunio. Garantisci la tua protezione da eventuali imprevisti sia durante l’attività lavorativa che nel tuo tempo libero.",
        button: "Scopri di più",
      },
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "TCM",
        description:
          "I progetti di vita che coinvolgono le persone a cui tieni richiedono una notevole responsabilità. Offriamo un supporto tangibile per preservare il loro tenore di vita e la loro salute, consentendoti di guardare al futuro con serenità.",
        button: "Scopri di più",
      },
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Veterinaria",
        description:
          "Dare e ricevere amore dal nostro cane o gatto ci riempie di gioia e regala tranquillità, ma solo se ci prendiamo cura di loro nel modo giusto. Sappiamo quanto sia importante per te il benessere del tuo animale domestico e vogliamo assicurargli tutte le cure che merita.",
        button: "Scopri di più",
      },
    ],
  },
};

export const professionistiAziende = {
  section1: {
    title: "Aby per Professionisti e Aziende",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title: "Professionisti e Aziende: proteggi il Tuo successo con ABY Broke",
    body: "Viviamo in un mondo in costante evoluzione, dove i professionisti e le aziende sono costantemente chiamati ad adattarsi a sfide uniche e mutevoli. In questo contesto dinamico, la sicurezza finanziaria e operativa diventa cruciale per garantire il successo a lungo termine. ABY Broker si propone come il tuo partner assicurativo di fiducia, offrendo soluzioni personalizzate che rispondono alle esigenze specifiche di professionisti e aziende. Scegliere ABY Broker significa non solo adattarsi alle sfide in evoluzione del mondo moderno, ma anche farlo con una guida esperta che comprende le tue esigenze specifiche. La nostra missione è fornire una copertura assicurativa che va oltre la semplice protezione finanziaria, creando una partnership di fiducia per garantire il tuo successo futuro. Contattaci oggi stesso per iniziare il tuo percorso di sicurezza e successo con ABY Broker.",
    button: "Contattaci",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section3: {
    title:
      "Per i Professionisti: una copertura su misura per il tuo percorso unico",
    body: "I professionisti, da consulenti a liberi professionisti, affrontano sfide quotidiane che richiedono una copertura assicurativa mirata. ABY Broker comprende che ogni professionista ha esigenze uniche e offre soluzioni su misura. Dalle polizze di base alle coperture complete, siamo qui per garantire che tu possa continuare a perseguire il tuo percorso professionale con la sicurezza che meriti.",
    button: "Contattaci",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section4: {
    title: "Per le Aziende: Soluzioni proattive per tutelare il Tuo business",
    body: "Le aziende operano in settori diversi, ciascuno con rischi specifici. ABY Broker comprende che la continuità operativa è essenziale, e pertanto offriamo soluzioni assicurative proattive progettate per affrontare le sfide specifiche del tuo settore. La nostra gamma di servizi assicurativi mira a proteggere non solo l’operatività, ma anche a preservare la reputazione aziendale, garantendo la tranquillità necessaria per concentrarti sul successo del tuo business.",
    button: "Contattaci",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
};

export const fideiussioniCauzioni = {
  section1: {
    title: "Proteggiamo il Tuo Successo Finanziario in Ogni Dettaglio",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title:
      "Fideiussioni e Cauzioni: la tua sicurezza, la nostra garanzia di eccellenza",
    body: "Benvenuto nel mondo delle Fideiussioni e Cauzioni di ABY Broker, il tuo affidabile partner per garantire la sicurezza finanziaria nelle situazioni più complesse. Siamo orgogliosi di offrire una gamma completa di prodotti di punta, emessi da compagnie assicurative iscritte al ramo 15 IVASS, progettati sia per aziende che per professionisti. Dalla Nostra Esperienza alla Tua Tranquillità Le nostre Fideiussioni e Cauzioni coprono una vasta gamma di settori e esigenze, offrendo soluzioni su misura per le tue specifiche necessità, consulta qui sotto l’elenco oppure contattaci per saperne di più",
    button: "Contattaci",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section3: {
    body: "Le nostre Fideiussioni e Cauzioni coprono una vasta gamma di settori e esigenze, offrendo soluzioni su misura per le tue specifiche necessità:",
    list: [
      {
        bold: "Gare d'Appalto Nazionali e Internazionali:",
        text: "Garantiamo la tua partecipazione sicura e vincente, fornendo coperture adatte alle sfide delle gare d’appalto sia a livello nazionale che internazionale.",
      },
      {
        bold: "Edilizia:",
        text: "Proteggiamo il tuo impegno nel settore edilizio con fideiussioni e cauzioni progettate per soddisfare gli obblighi di legge e di contratto, garantendo il completamento sicuro dei progetti.",
      },
      {
        bold: "Settore Rifiuti:",
        text: "Offriamo soluzioni mirate per il settore dei rifiuti, garantendo conformità normativa e sicurezza finanziaria.",
      },
      {
        bold: "Rimborso IVA:",
        text: "Assicuriamo il rimborso IVA in conformità con le normative vigenti, offrendo una copertura affidabile e adatta alle tue esigenze finanziarie.",
      },
      {
        bold: "Garanzie di Adempimento:",
        text: "Siamo il tuo partner di fiducia per garantire l’adempimento degli obblighi di legge o contrattuali, offrendo la tranquillità necessaria per concentrarti sul tuo business.",
      },
      {
        bold: "Concessioni Demaniali:",
        text: "Forniamo fideiussioni specifiche per le concessioni demaniali, garantendo il rispetto delle normative e la sicurezza finanziaria necessaria per operare in questo settore.",
      },
    ],
  },
  section4: {
    title: "Capacità Finanziarie: Un Investimento nella Tua Sicurezza",
    body: {
      body: "Oltre alle Fideiussioni e Cauzioni, ABY Broker offre soluzioni di capacità finanziarie per diverse categorie, tra cui:",
      list: [
        {
          bold: "Iscrizione Albo Trasportatori Merci o Persone:",
          text: "Garantiamo la conformità alle normative, consentendoti di operare nel settore del trasporto con sicurezza e fiducia.",
        },
        {
          bold: "Autoscuole, Scuole Nautiche:",
          text: "Proteggiamo il tuo impegno educativo fornendo fideiussioni su misura per le esigenze delle autoscuole e delle scuole nautiche.",
        },
        {
          bold: "Agenzie Pratiche Auto:",
          text: "Offriamo soluzioni adatte alle agenzie pratiche auto, garantendo conformità e sicurezza finanziaria.",
        },
        {
          bold: "Centri di Revisione Veicoli a Motore:",
          text: "Proteggiamo la tua attività garantendo l’adempimento agli standard di revisione veicoli a motore, con fideiussioni e cauzioni su misura.",
        },
        { bold: "Agenzie Pratiche Auto" },
      ],
    },
    button: "Contattaci",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image",
    },
  },
};

export const rischiSpeciali = {
  section1: {
    title: "Rischi Speciali: la Tua Sicurezza, la Nostra Competenza",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title: "Proteggiamo ogni aspetto del Tuo Business con le polizze rischi",
    body: `Benvenuto nel mondo delle polizze rischi, coperture specializzate di ABY Broker per tutelarsi da rischi speciali. Con soluzioni mirate, proteggiamo integralmente il tuo business. La nostra vasta gamma di polizze è progettata per fronteggiare le sfide uniche che le aziende affrontano ogni giorno, offrendo una sicurezza che va oltre le aspettative.
    Consulta qui sotto l’elenco oppure contattaci per saperne di più`,
    button: "Contattaci",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section3: {
    title: "Polizze rischi su misura per te",
    body: "Scegli ABY Broker per affrontare i rischi speciali della tua azienda",
    list: [
      {
        title: "Responsabilità Civile Generale (RC Generale)",
        body: "La nostra polizza RCT/RCO protegge da potenziali azioni di richiesta di risarcimento danni di terzi, fornendo una difesa robusta contro eventuali conseguenze devastanti per la vita stessa dell’azienda.",
      },
      {
        title: "Responsabilità Civile Prodotti (RC Prodotti)",
        body: "Copriamo le azioni di richiesta di risarcimento danni causati da difetti del prodotto, garantendo che il produttore sia protetto dai danni derivanti dai difetti in fase di progettazione o fabbricazione e quelli manifestatisi durante l’uso.",
      },
      {
        title: "Polizze Incendio",
        body: "Proteggiamo gli immobili dell’azienda da danni provocati da incendio e scoppio, offrendo inoltre coperture aggiuntive per eventi naturali, terremoti e catastrofi.",
      },
      {
        title: "D&O o RC dell’amministratore",
        body: "Tuteliamo il patrimonio personale degli amministratori, dirigenti e membri degli organi di gestione nel caso siano coinvolti in azioni di risarcimento danni.",
      },
      {
        title: "Tutela Legale",
        body: "Offriamo copertura per le spese legali necessarie all’azienda per far valere i propri diritti nelle situazioni legate all’attività imprenditoriale.",
      },
      {
        title: "Crediti commerciali",
        body: "Proteggiamo da insolvenze o mancati pagamenti dei clienti nazionali e esteri, garantendo stabilità finanziaria.",
      },
      {
        title: "Welfare Aziendale",
        body: "Forniamo un insieme di beni e servizi basato su accordi collettivi per migliorare il benessere dei dipendenti.",
      },
      {
        title: "Polizze sanitarie cumulative",
        body: "Rimborsiamo le spese mediche sostenute in caso di ricovero, operazioni chirurgiche, esami e visite mediche.",
      },
      {
        title: "Settore raccolta rifiuti",
        body: "Offriamo RC ambientale, polizze incendio tramite Lloyd’s, iscrizioni albo settore rifiuti e RC generale specifiche per questo settore",
      },
      {
        title: "Rischi tecnologici",
        body: "Coperture come polizze CAR e EAR, rimpiazzo e posa in opera, decennale postuma e fideiussioni per anticipi su costruzioni.",
      },
      {
        title: "Istituti di vigilanza",
        body: "RC istituti di vigilanza e RCC responsabilità civile contrattuale per gli istituti di vigilanza.",
      },
      {
        title: "Polizze Cyber Risk",
        body: "Copriamo i costi associati ai danni e al recupero dei dati dopo una violazione della sicurezza informatica o evento simile.",
      },
      {
        title: "Polizze settore orafo",
        body: "Coperture specializzate per gioiellerie e laboratori orafo.",
      },
      {
        title: "Polizze settore Fine Art",
        body: "Soluzioni per privati, eventi, mostre e musei.",
      },
      {
        title: "Polizze annullamento manifestazioni",
        body: "Rimborsiamo perdite pecuniarie subite dall’organizzatore a causa della cancellazione dell’evento.",
      },
      {
        title: "Polizze parametriche settore Turismo e Balneare",
        body: "Assicuriamo il mancato fatturato in caso di condizioni meteorologiche sfavorevoli.",
      },
      {
        title: "Polizze Yacht",
        body: "Polizza corpi.",
      },
      {
        title: "Polizze Leasing",
        body: "Polizze All Risk per beni strumentali in Leasing",
      },
      {
        title: "Polizze Transporti",
        body: `・ Vettoriale su targa
                ・ Vettoriale su fatturato
                ・ Vettoriale danni per conto
                ・ Singolo viaggio`,
      },
      {
        title: "Polizze per settore agricolo",
        body: "",
      },
    ],
  },
  section4: {
    title:
      "Contattaci oggi per personalizzare la tua copertura e proteggere ogni aspetto del tuo business",
    button: "Contattaci",
    data: "Aby Broker Srl – Codice Fiscale/Partita IVA 00803170141 – Via Gandhi 8 – 54011 Aulla",
  },
};

export const praticheAuto = {
  section1: {
    title: "Da sempre al fianco dell'automobilista",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title: "Agenzia di pratiche auto: di cosa si tratta?",
    body: "L’agenzia di pratiche auto è uno studio professionale che da consulenza su una molteplicità di servizi e si occupa del disbrigo delle pratiche documentali necessarie per la circolazione dei mezzi di trasporto. L’agenzia di pratiche auto, offre una serie di servizi di consulenza e assistenza per varie questioni che interessano la tua automobile e in riferimento a adempimenti prescritti dalla normativa vigente a cui deve sottostare un conducente di un mezzo su strada. Le agenzie di pratiche automobilistiche sono presenti su tutto il territorio nazionale sostituendo nelle loro funzioni le unità territoriali del PRA e della Motorizzazione (DTT) e offrono quindi un aiuto concreto al possessore di un’automobile o di un qualsiasi altro mezzo di circolazione. Al fi fine di diversificare i servizi di utilità rivolti al pubblico, ABY Broker ha deciso di iniziare un nuovo percorso a supporto degli automobilisti per offrire loro servizi completi ed efficaci.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section3: {
    title: "I servizi che offriamo",
    body: "ABY Broker, per completare i servizi assicurativi RC Auto legati al settore veicoli, ha deciso di offrire i servizi di pratiche auto direttamente all’interno degli Aby Point, i punti vendita dislocati in gran parte del territorio Italiano. Questa offerta, permette ai nostri clienti di disporre di un’ampia varietà di servizi collegati ai veicoli, come ad esempio:",
    servizi: [
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Immatricolazione auto e moto",
        description:
          "L’immatricolazione di un veicolo, nell’ambito della normativa vigente, è una procedura telematica che abilita alla circolazione su strada. Nei nostri punti vendita, trovi personale preparato addetto all’espletamento di qualsiasi tipo di immatricolazione.",
      },
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Visure PRA",
        description:
          "Una visura è un documento richiesto dall’archivio del Pubblico Registro Automobilistico (PRA) o alla Motorizzazione Civile, che riporta informazioni relative ai veicoli ed eventuali annotazioni. Se ti occorresse questo tipo di documento o se avessi domande specifiche, puoi rivolgerti ai nostri addetti nel punto vendita più vicino a te.",
      },
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Bollo auto",
        description:
          "Il bollo auto è una tassa legata al possesso di un veicolo. Fatte salve particolari condizioni, deve essere corrisposto ogni anno. Per avere informazioni più dettagliate sul rinnovo del bollo auto della tua autovettura o della tua moto, puoi rivolgerti ai nostri addetti nel punto vendita più vicino a te.",
      },
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Pratiche per patenti di guida",
        description:
          "Quanto tempo prima devo prenotare il rinnovo patente? Con Aby la gestione delle pratiche patenti è molto semplice: rivolgiti a uno dei nostri punti vendita, dal rinnovo patente al duplicato della patente, gestiamo tutte le tue esigenze liberandoti da qualsiasi pensiero.",
      },
      {
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
          alt: "Placeholder",
        },
        title: "Passaggi di proprietà",
        description:
          "Il Passaggio di Proprietà è l’atto attraverso il quale si trasferisce la titolarità di un veicolo da un soggetto ad un altro. Presso punti vendita Aby, potrai effettuare: Passaggio di Proprietà Auto, Passaggio di Proprietà Moto e Scooter, Passaggio di Proprietà non intestatario, Eredità, Atti Societari, Ravvedimenti Operosi.",
      },
    ],
    section4: {
      title: "Richiest informazioni",
      form: {
        name: "Nome",
        email: "Email",
        cellulare: "Cellulare",
        messaggio: "Messaggio",
        acceptTerms: ` La compilazione del form, spontanea e volontaria, comporta
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
              proposti da ABY SERVIZI SRL`,
      },
    },
    section5: {
      title: "Domande frequenti",
      subHeading: {
        text: "CONTATTACI PER ULTERIORI CHIARIMENTI",
        email: "apa-aulla@abyservizi.it",
      },
      faqs: [
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
    },
  },
};

export const lavoraConNoi = {
  section1: {
    title:
      "Vuoi entrare nel mondo assicurativo o ampliare le tue possiblità di crescita professionale?",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title:
      "Intermediario, broker o agente assicurativo? Cerchiamo te, ma non solo….",
    body: "Sei un agente assicurativo, broker o intermediario?  Appartiene alle sezioni A, B, E del RUI? Allora siamo interessati a te oltre che a  persone per la gestione dei nostri punti vendita  (detti Aby Point). Aby Broker è un partner solido e affidabile,  attivo da oltre 20 anni sul territorio Italiano, sviluppando una  rete distributiva di tutto interesse. Siamo cresciuti esponenzialmente con prodotti validi  e diverse formule di business. In particolare, la nostra crescita professionale è stata possibile perché crediamo nella collaborazione , nel lavoro individuale e nel  lavoro di gruppo. Siamo sempre alla ricerca di nuovi collaboratori  per migliorarci e crescere assieme e  ampliare la nostra rete territoriale per espandere capillarmente i nostri servizi . Quindi, se sei un agente assicurativo, broker o intermediario e sei interessato a nuove possibilità di crescita , consulta le nostre opzioni qui sotto per vedere l’offerta più adatta alle tue esigenze professionali.",
  },
  section3: {
    title:
      "Sei agente assicurativo, broker o intermediario e vorresti entrare in un gruppo solido, affidabile e dinamico?",
    body: "Con i nostri consulenti dedicati  e la nostra piattaforma Abyway, che tu sia  intermediario, broker o agente assicurativo, avrai a disposizione un supporto costante  per far crescere le tue vendite!  Scopri di più su questa grande possibilità, cliccando qui sotto.",
    button: "Scopri la nostra proposta",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section4: {
    title: "Vuoi gestire un Aby Point? scopri la formula zero pensieri!",
    body: "Non ti preoccupare, pensiamo a tutto noi,  ti offriamo tutto il supporto necessario per far  decollare la tua attività! Aby offre una grande possibilità per tutti coloro che desiderano diventare  gestori di ABY Point per la propria zona senza pensare ad utenze, affitti, pubblicità e arredi . Ti sembra impossibile? Scopri tutti i dettagli della nostra offerta cliccando qui di seguito.",
    button: "Scopri la nostra proposta",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
};

export const chiSiamo = {
  section1: {
    title: "Tu sai chi è ABY Broker?",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section2: {
    title: "Un mediatore assicurativo leader nel mercato",
    body: "ABY Broker Srl è un mediatore assicurativo nato nel 2002 ed iscritto alla sezione B del RUI ( Registro Unico Intermediari). L’obiettivo primario della società, è stato sempre quello di avere rapporti con le maggiori imprese di assicurazione per offrire i migliori prodotti del mercato assicurativo ai propri clienti. Nel tempo, ABY Broker è cresciuta guadagnandosi una importante posizione tra i leader del mercato assicurativo italiano, offrendo ai propri clienti una grande varietà di prodotti assicurativi come RC Auto, polizze persone e famiglia, RC professionisti , polizze per rischi speciali. Per facilitare l’operatività dei collaboratori e fornire i migliori prodotti assicurativi ai propri clienti, ABY ha sviluppato una piattaforma informatica chiamata “Abyway ” che, oltre a dare supporto nella preventivazione, è in grado di elaborare e gestire prezzi e coperture assicurative in funzione delle esigenze della clientela . Nel 2016, dopo una crescita importante tra le società leader del mercato, ABY Broker diventa partner di SNA ( Sindacato Nazionale Agenti di Assicurazione), con cui porta avanti un importante e ambizioso percorso di collaborazione sempre nell’ottica di migliorarsi continuamente.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section3: {
    title: "ABY: non soltanto mediatore assicurativo",
    body: "Aby Broker, non si occupa solamente di servizi assicurativi. Dall’ iniziale ruolo di mediatore assicurativo, la nostra offerta si è evoluta di continuo per avvicinarsi alle esigenze dei nostri clienti. Oggi siamo in grado di proporre non soltanto servizi assicurativi, ma prodotti diversificati che includono contratti luce e gas e servizi di pratiche auto. Questa varietà di offerta è diventata parte integrante del mondo di Aby Broker che è da sempre orientato all’attenzione verso la clientela. La vendita al cliente, avviene tramite negozi detti “Aby Point” dove il cliente riceve consulenza dedicata da parte di operatori qualificati che ascoltano le esigenze dei clienti e forniscono consigli su prodotti e condizioni economiche che soddisfino pienamente le loro esigenze. La varietà della nostra offerta è distribuita attraverso una rete di vendita che conta attualmente 44 negozi sul territorio italiano e che verrà ampliata di anno in anno per coprire, gradualmente, anche le province ancora scoperte. Questo modello distributivo ci ha permesso di acquisire circa 100.000 clienti che, ogni giorno, si rivolgono a noi per gestire le loro esigenze di risparmio e sicurezza!",
  },
  section4: {
    title: "Un mediatore assicurativo con tanti servizi per te",
    body: "A seguito della grande crescita avuta come mediatore assicurativo, Aby costituisce nel 2014 la società Aby Servizi Srl con l’obiettivo di individuare e proporre nuovi servizi da abbinare al comparto assicurativo. Negli anni, Aby Servizi ha stretto importanti convenzioni per la fornitura del servizio di assistenza stradale e del servizio copertura cristalli. Dal 2021, nell’ottica di ampliare l’offerta dei servizi di consulenza legati al settore veicoli, Aby Servizi ha compiuto passi importanti lavorando per lo sviluppo del settore Pratiche Auto e fornire servizi come visure, passaggi di proprietà, rinnovi patenti ed altro ancora. Anche nel caso di Aby Servizi, il contatto col pubblico è fondamentale ed è stato messo in pratica attraverso la presenza di preparati operatori nei nostri Aby Point.",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
  section5: {
    title: "Da mediatore assicurativo ai contratti Gas e Luce",
    body: "Per accrescere e diversificare l’offerta di servizi alla clientela, nel 2020 nasce Aby Energia. Questa fase proietta Aby, da mediatore assicurativo quale era, all’interno del mercato energetico. L’obiettivo di Aby Gas e Luce diventa quello di ricercare i prodotti per la fornitura di energia elettrica e gas che permettano a privati o aziende di ottenere il massimo risparmio. Il percorso che ha portato alla realizzazione di questo progetto è passato attraverso la conclusione di importanti accordi con i principali fornitori energetici sul mercato italiano e la realizzazione di un comparatore informatico che permettesse di preventivare al cliente le tariffe dei prodotti migliori esistenti. Ultimo passo compiuto, è stato quello di formare adeguatamente tutti gli operatori degli Aby Point per permettere una competenza adeguata nel relazionarsi con la clientela. Anche in materia energia, la politica distributiva di Aby rimane la stessa: presenza di un professionista specializzato all’interno di un “Aby Point”, per ricercare in tempo reale i migliori prodotti presenti sul mercato, mettendo al centro della sua attività solo ed esclusivamente le esigenze e l’interesse del cliente!",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Placeholder",
    },
  },
};
