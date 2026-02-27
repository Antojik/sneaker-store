import { Button } from "antd";
import Image from "next/image";

interface IconButtonProps {
  text: string;
  iconSrc: string;
  width?: number;
  height?: number;
}

export default function IconButton({
  text,
  iconSrc,
  width = 18,
  height = 18,
}: IconButtonProps) {
  return (
    <Button color="gold" variant="solid">
      <Image src={iconSrc} alt={text} width={width} height={height} />
      {text}
    </Button>
  );
}
