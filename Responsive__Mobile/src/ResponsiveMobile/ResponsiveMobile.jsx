import { useEffect, useState } from "react";

export default function ResponsiveMobile() {
    const [mobile, setMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const resizeHandler = () => {
            setMobile(window.innerWidth <= 1024);
        }

        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);


    return (
        <div>
            {mobile ? <div>Mobile</div> : <div>Desktop</div>}
        </div>
    )
}