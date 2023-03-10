import Svg, { SvgProps } from "../Svg";

export default function ProductIcon(props: SvgProps) {
  return (
    <Svg {...props}>
      <path d="m9 32.5 13.5 7.8V24.85L9 17.05Zm16.5 7.8L39 32.5V17l-13.5 7.85ZM10.65 14.55 24 22.3l13.3-7.75L24 6.85ZM6 34.25V15.5q0-.8.4-1.5t1.1-1.1l15-8.65q.7-.4 1.5-.4t1.5.4l15 8.65q.7.4 1.1 1.1.4.7.4 1.5v17q0 .8-.4 1.5t-1.1 1.1l-15 8.65q-.7.4-1.5.4t-1.5-.4ZM24 24Z" />
    </Svg>
  );
}
