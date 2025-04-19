export interface serviceCardInterface {
  id: number;
  titleFirst: string;
  titleSecond: string;
  illustration: string;
  theme: "green" | "dark" | "light";
}

export interface serviceCardProps {
  theme: "green" | "dark" | "light";
  titleFirst: string;
  titleSecond: string;
  illustration: string;
}
