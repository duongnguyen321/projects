import { useEffect } from "react";
import CommingSoon from "../../components/comming/Comming";
export default function Success(){
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
    return (

       <CommingSoon/>

    );
}