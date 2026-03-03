import { sneakerMock } from "../../mocks/sneakerMock";
import SneakerCard from "../../ui/SneakerCard/SneakerCard";
import style from "./SneakerList.module.scss";

interface SneakerListProps {
  items: typeof sneakerMock;
  isAnimating: boolean;
}

export default function SneakerList({ items, isAnimating }: SneakerListProps) {
  return (
    <div
      className={`${style.container} ${isAnimating ? style.fadeOut : style.fadeIn}`}
    >
      {items.map((item) => (
        <SneakerCard
          key={item.imageSrc}
          imageUrl={item.imageSrc}
          text={item.text}
          rating={item.rating}
          price={item.price}
          fullPrice={item.fullPrice}
          discount={item.discount}
        />
      ))}
    </div>
  );
}
