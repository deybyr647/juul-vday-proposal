import Image from "next/image";
import Link from "next/link";
import styles from "./styles/page.module.scss";

import juulSmileGif from "../public/images/juul_smile.gif";
import Rose from "./components/Rose";

const Home = () => {
  return (
    <section className={"section"}>
      <h1 className={`title is-1 has-text-centered ${styles.title}`}>
        You’ve got my heart doing backflips—will you catch it and be my
        Valentine?
      </h1>

      <div className={"columns"}>
        <div
          className={
            "column is-flex is-justify-content-center is-hidden-mobile"
          }
        >
          <Rose />
        </div>

        <div className={"column"}>
          <div className={`image ${styles.mainImage}`}>
            <Image
              src={juulSmileGif}
              alt={"Juul Smiling Gif"}
              className={styles.mainImage}
            />
          </div>
        </div>

        <div className={"column is-flex is-justify-content-center"}>
          <Rose />
        </div>
      </div>

      <div className={"columns"}>
        <div className={"column is-flex is-justify-content-space-evenly"}>
          <Link href={"/yay"} className={"button is-primary"}>
            Yes
          </Link>

          <Link href={"/wrongChoice"} className={"button is-danger"}>
            No
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
