import Link from "next/link";
import style from "./Navigate.module.scss";

export default function Navigate() {
  const navItems = [
    { href: "/home", label: "HOME" },
    { href: "/sneakers", label: "SNEAKERS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className={style.container}>
      <Link href="/" className={style.logo}>
        SHOE-STORE
      </Link>
      <div className={style.navigate}>
        {navItems.map((item) => {
          return (
            <Link className={style.link} key={item.href} href={item.href}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
