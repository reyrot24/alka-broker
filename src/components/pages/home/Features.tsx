import { Layout1 } from "../../layouts/Layout1";
import { Layout192 } from "../../layouts/Layout192";

const Features = () => {
  return (
    <>
      <section className="px-[5%] py-16 md:py-24 lg:py-28 w-full">
        <div className="container w-full">
          <div className="flex flex-col items-center w-full">
            <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20 ">
              <div className="w-full ">
                <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl">
                  ABY: non soltanto broker di assicurazioni!
                </h1>
                <p className="md:text-md">
                  ABY è un broker di assicurazioni nato oltre venti anni fa.
                  Abbiamo sempre offerto ai nostri clienti polizze e servizi
                  delle primarie compagnie assicurative. Nel tempo, ci siamo
                  guadagnati una posizione tra i leader del mercato assicurativo
                  Italiano. La nostra rete distributiva è cresciuta fino a
                  raggiungere una diffusa presenza sul territorio Italiano. I
                  nostri punti vendita, chiamati ABY Point, sono la punta di
                  diamante di questa rete distributiva. Nel tempo, la nostra
                  offerta si è evoluta per adattarsi alle esigenze dei nostri
                  clienti. Infatti, nei nostri ABY Point potrai trovare, in un
                  colpo solo, tutte le nostre soluzioni: servizi assicurativi,
                  servizi energia e servizi di pratiche auto. Tutto questo in un
                  unico punto vendita dove potrai trovare i nostri operatori di
                  vendita e assistenza sempre a tua completa disposizione!
                  Questa filosofia e questo modello ci hanno ampliamente
                  premiati arrivando a contare, ad oggi, oltre 100.000 clienti
                  soddisfatti!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Layout1 />
      <Layout192 />
    </>
  );
};

export default Features;
