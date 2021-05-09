import { useState } from 'react'

const Input = () => {
  const [value, setValue] = useState(0)

  return (
    <div>
      <input
        onChange={evento => {
          console.log(evento)
          setValue(evento.target.value)
        }}
        type='number'
        value={value}
      />
      <button onClick={() => setValue(1993)}>Modificar valor</button>
    </div>
  )
}

export default Input