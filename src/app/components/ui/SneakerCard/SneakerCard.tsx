import Image from "next/image";
import style from "./SneakerCard.module.scss";
import Rating from "../Rating/Rating";

interface BestSellerProps {
  imageUrl: string;
  text: string;
  price: string;
  fullPrice: string;
  discount: number;
  rating: number;
}

export default function SneakerCard({
  imageUrl,
  text,
  price,
  fullPrice,
  discount,
  rating,
}: BestSellerProps) {
  return (
    <div className={style.card}>
      <Image src={imageUrl} alt={text} width={257} height={246} />
      <p className={style.title}>{text}</p>
      <div className={style.rating}>
        <Rating value={rating} />
      </div>

      <div className={style.priceContainer}>
        <p className={style.price}>{price}</p>
        <p className={style.full_price}>{fullPrice}</p>
        <p className={style.discount}>{discount}% Off</p>
      </div>
    </div>
  );
}
