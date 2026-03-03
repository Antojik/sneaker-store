import style from "./Rating.module.scss";

interface RatingProps {
  value: number;
  max?: number;
}

export default function Rating({ value, max = 5 }: RatingProps) {
  return (
    <div className={style.container}>
      {Array.from({ length: max }, (_, index) => (
        <svg
          key={index}
          width={14}
          height={16}
          viewBox="0 0 14 16"
          fill={index < value ? "#ffc600" : "#c1c8ce"}
        >
          <path d="M13.796 5.89893L9.54449 9.4209L10.7952 15.1449L6.66429 11.6869L2.26726 14.9609L3.96605 9.3009L0 5.60095L5.18043 5.56091L7.12712 0L8.63027 5.63599L13.796 5.89893Z" />
        </svg>
      ))}
    </div>
  );
}
