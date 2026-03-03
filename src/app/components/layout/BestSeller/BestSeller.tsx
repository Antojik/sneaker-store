"use client";

import { useState } from "react";
import SneakerList from "../SneakerList/SneakerList";
import style from "./BestSeller.module.scss";
import { sneakerMock } from "../../mocks/sneakerMock";
import Link from "next/link";

export default function BestSeller() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);

  const menuHeaderItems = ["All", "WOMEN", "MEN", "UNISEX", "CASUAL"];

  const filteredSneakers =
    activeCategory === "All"
      ? sneakerMock
      : sneakerMock.filter((item) => item.category.includes(activeCategory));

  const handleClick = (category: string) => {
    setIsAnimating(true);

    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 className={style.heading}>BEST SELLER</h2>
      <div className={style.menu}>
        {menuHeaderItems.map((label) => {
          return (
            <p
              key={label}
              onClick={() => handleClick(label)}
              className={activeCategory === label ? style.active : ""}
            >
              {label}
            </p>
          );
        })}
      </div>
      <SneakerList items={filteredSneakers} isAnimating={isAnimating} />
      <Link href="/sneakers" className={style.link}>
        LOAD MORE
      </Link>
    </section>
  );
}
