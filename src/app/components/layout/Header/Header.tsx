import Image from "next/image";
import style from "./header.module.scss";
import { Button } from "antd";
import Link from "next/link";
import IconButton from "../../ui/IconButton/IconButton";

export default function Header() {
  return (
    <div className={style.header}>
      <Link href="/">
        <div className={style.logo}>
          <Image src="/user.svg" alt="vercel" width={20} height={20} />
          <p className={style.text}>My Profile</p>
        </div>
      </Link>

      <div className={style.actions}>
        <Button variant="solid" color="gold">
          Login
        </Button>
        <IconButton text="Registration" iconSrc="/vercel.svg" />
      </div>
    </div>
  );
}
