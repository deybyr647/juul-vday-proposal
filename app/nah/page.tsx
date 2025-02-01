import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

import juulWth from "../../public/images/juul_wth.png";
import jessieStaring from "../../public/images/jessie_staring.png";

const NoPage = () => {
  return (
    <section className={"section"}>
      <h1 className={`title is-1 has-text-centered ${styles.title}`}>
        Fym no?
      </h1>

      <p
        className={`has-text-centered is-size-3 is-size-5-mobile ${styles.subtitle}`}
      >
        You&#39;re literally my girlfriend, go back and say yes
      </p>

      <div className={"columns"}>
        <div className={"column"}>
          <div className={`image ${styles.mainImage}`}>
            <Image
              src={jessieStaring}
              alt={"Jessie Staring"}
              priority={true}
              placeholder={"blur"}
              className={``}
            />
          </div>
        </div>

        <div className={"column"}>
          <div className={`image ${styles.mainImage}`}>
            <Image
              src={juulWth}
              alt={"Juul Smiling Gif"}
              className={`is-hidden-mobile`}
              placeholder={"blur"}
            />
          </div>
        </div>

        <div className={"column"}>
          <div className={`image ${styles.mainImage}`}>
            <Image
              src={jessieStaring}
              alt={"Jessie Staring"}
              className={`is-hidden-mobile`}
              placeholder={"blur"}
            />
          </div>
        </div>
      </div>

      <div className={"columns"}>
        <div
          className={`column is-flex is-justify-content-space-evenly paddingless ${styles["button-container"]}`}
        >
          <Link href={"/"} className={"button is-primary"}>
            Got It
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoPage;
