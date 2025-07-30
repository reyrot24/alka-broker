import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";

const OPTIONS = { align: "start", loop: true };

export function Carousell() {
  return <EmblaCarousel options={OPTIONS} />;
}
