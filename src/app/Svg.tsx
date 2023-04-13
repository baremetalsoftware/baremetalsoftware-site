import { PropsWithChildren } from "react";

export type SvgProps = {
  title: string;
  viewBox?: string;
  className?: string;
  width?: string;
  height?: string;
};

export default function Svg({
  title,
  className,
  viewBox,
  width,
  height,
  children,
}: PropsWithChildren<SvgProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox ?? "0 0 48 48"}
      width={width ?? "100%"}
      height={height ?? "100%"}
      className={className}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}
