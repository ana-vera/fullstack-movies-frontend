import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults)

  useEffect(() => {
    setInput({ ...defaults })
  },
  [defaults])

  // Funcion que se ejecuta cada vez que se escribe en un input
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // console.log(name, value)
    setInput({ ...input, [name]: value })
  }

  // Funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
