import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

import juulSmileGif from "../public/images/juul_smile.gif";
import Rose from "./components/Rose";

const Home = () => {
  return (
    <section className={"section"}>
      <h1 className={`title is-1 has-text-centered ${styles.title}`}>
        Julianne...
      </h1>

      <p
        className={`has-text-centered is-size-3 is-size-5-mobile ${styles.subtitle}`}
      >
        Roses may fade, but my feelings for you never will—be my Valentine?
      </p>

      <div className={"columns"}>
        <div
          className={
            "column is-flex is-justify-content-center is-align-items-center paddingless is-hidden-mobile"
          }
        >
          <Rose />
        </div>

        <div className={"column paddingless"}>
          <div className={`image ${styles.mainImage}`}>
            <Image
              src={juulSmileGif}
              alt={"Juul Smiling Gif"}
              priority={true}
              className={`${styles.mainImage}`}
            />
          </div>
        </div>

        <div
          className={
            "column is-flex is-justify-content-center is-align-items-center paddingless"
          }
        >
          <Rose />
        </div>
      </div>

      <div className={"columns"}>
        <div
          className={`column is-flex is-justify-content-space-evenly paddingless ${styles["button-container"]}`}
        >
          <Link href={"/yeah"} className={"button is-primary"}>
            Yes
          </Link>

          <Link href={"/nah"} className={"button is-danger"}>
            No
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
