interface NumberProps {
  children: React.ReactNode;
}

export default function Number(props: NumberProps) {
  return <h3 style={{ color: "red" }}>{props.children}</h3>;
}
