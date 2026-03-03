import BestSeller from "./components/layout/BestSeller/BestSeller";
import PhotoSection from "./components/layout/PhotoSection/PhotoSection";
import style from "./page.module.scss";

export default function Home() {
  return (
    <main className={style.container}>
      <PhotoSection />
      <BestSeller />
    </main>
  );
}
