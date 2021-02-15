import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

import Image from "next/image";

const Picture = ({ id }) => {
    return (
        <Image
            src={"/images/" + id + ".jpg"}
            width="220"
            height="320"
        />
    )
}



export { Picture };