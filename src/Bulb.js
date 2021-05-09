import { useState } from "react";

const Bulb = () => {
    
    const [isTurnOn, setIsTurnOn] = useState("OFF")
    const [image, setImage] = useState("light-bulb-of")

    const hanbleBulb = () => {
        if (isTurnOn === "OFF" ) {

            setIsTurnOn("ON")
            setImage("light-bulb-on")
            return
        } 
        setIsTurnOn("OFF")
        setImage("light-bulb-of")
        
    }

    return(
        <div>

            <div className={image}>
            </div>

           <p>La Bombilla esta prendida : {isTurnOn}
            </p>


           <button onClick={hanbleBulb}>
            SWITCH
            </button>

            
        </div>
        
    );
}

export default Bulb