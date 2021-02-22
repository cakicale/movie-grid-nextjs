import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

import Image from "next/image";
import styles from "./Picture.module.css";

const Picture = ({ id }) => {
    return (
        <img
            className={styles.moviePicture}
            src={"/images/" + id + ".jpg"}
        />
    )
}



export { Picture };