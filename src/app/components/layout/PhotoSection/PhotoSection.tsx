import Image from "next/image";
import style from "./PhotoSection.module.scss";

export default function PhotoSection() {
  return (
    <section className={style.relative_container}>
      <div className={style.big_image}>
        <Image
          src="/big_pic/big_shoe.png"
          alt="big pic"
          width={1500}
          height={654}
          style={{ width: "100vw" }}
        />
        <h1 className={style.heading}>
          Super Flash Sale <br /> 50% Off
        </h1>
      </div>
      <div className={style.three_images}>
        <Image
          src="/gray_girl.png"
          alt="gray girl"
          width={323}
          height={370}
          className={style.image}
        />
        <Image
          src="/brown_girl.png"
          alt="brown girl"
          width={466}
          height={370}
          className={style.image}
        />
        <Image
          src="/jeans.png"
          alt="jeans"
          width={323}
          height={370}
          className={style.image}
        />
      </div>
    </section>
  );
}
