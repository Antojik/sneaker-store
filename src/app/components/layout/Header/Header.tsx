import Image from "next/image";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.my_profile}>
        <Image src="/user.svg" alt="vercel" width={20} height={20} />
        <p className={style.text}>My Profile</p>
      </div>
      <div className={style.cart}>
        <Image src="/cart.svg" alt="cart" width={24} height={24} />
        <div className={style.point}>1</div>
      </div>

      <div>
        <p className={style.text}>Items</p>
      </div>
      <div className={style.total_container}>
        <p className={style.total_price}>$0.00</p>
        <Image src="/search.svg" alt="search" width={18} height={18} />
      </div>
    </header>
  );
}
