import styles from "./page.module.scss";
import { Button } from "antd";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>Hello nextJS!</p>
      <Button type="default" color="gold" variant="outlined">
        Text
      </Button>
    </div>
  );
}
