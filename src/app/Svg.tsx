import { PropsWithChildren } from "react";

export type SvgProps = {
  title: string;
  className?: string;
};

export default function Svg({ title, className, children }: PropsWithChildren<SvgProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="100%"
      height="100%"
      className={className}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}
