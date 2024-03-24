import Image from "next/image";
import Nav from "./components/Nav";
import Content from "./components/Content";

export default function Home() {
  return (
    <>
      <section>
        <Nav></Nav>
        <Content></Content>
      </section>
    </>
  );
}
