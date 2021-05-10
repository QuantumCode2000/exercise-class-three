import { useState } from "react";
import Input2 from "./Input2"

const CalculatorContainer = () => {

    const [degrees , setDegrees] = useState(0)
    const [radians , setRadians] = useState(0)

    const handleDegrees = (e) => {
        setDegrees(e)
        setRadians(e*0.01745)
    }

    const handleRadians = (e) => {
        setRadians(e)
        setDegrees(e*57.296)
    }

    return(
        <div className="container_solution">
            Calculator Conteiner
            <h5>
                Grades
                <Input2 value={degrees} setValue={handleDegrees}/>
            </h5>

            <h5>
                Radians
                <Input2 value={radians} setValue={handleRadians}/>
            </h5>
        </div>
    );
}

export default CalculatorContainer