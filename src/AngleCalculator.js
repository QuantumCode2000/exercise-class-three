import { useState } from 'react'

const AngleCalculator = () => {

    
    const [radian, setRadian] = useState(null)
    const [grades, setGrades] = useState(null)

    //   con esta funcion cambiare los datos de grados
    const handleGrades = (e) => {
        setGrades(e.target.value * 0.0174533)
    }
    //   con esta funcion cambiare los datos de radian
        const handleRadian = (e) => {
        setRadian(e.target.value * 57.2958)
    }

    const resetInput = () => {

        setRadian(null)
        setGrades(null)
        
    };

  return (
    <div>
        <div className="container-example">
            <p>RADIANES:</p>
            <input
                
                type='number'
                
                onChange={(e) => {
                    handleRadian(e)
                }}

                value={grades}

                onClick={() => resetInput()}
                    
            />

            <p>GRADOS:</p>

            
            <input

                type='number'
                                
                onChange={(e) => {
                    handleGrades(e)
                }}

                value={radian}
                onClick={() => resetInput()}
                
            />
        </div>      
    </div>
  )
}

export default AngleCalculator