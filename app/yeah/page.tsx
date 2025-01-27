import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Home.module.scss";

import juulSmileGif from "../public/images/juul_smile.gif";
import ImageFormContainer from "../components/ImageForm/ImageFormContainer";

const YesPage = () => {
  return (
    <section className={"section"}>
      <h1 className={"title is-1"}>Hello Yes Page</h1>

      <h1>Image Form</h1>

      <ImageFormContainer />
    </section>
  );
};

export default YesPage;
