import { useState, useEffect } from 'react'

function useForm (callback, defaults) {
  // Estado unico para guardar los datos de mi formulario en un objeto.
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto
  useEffect(() => {
    setInput({ ...defaults })
  }, [defaults])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  // Al ejecutar la funcion, retornará estas 3 cosas para que podamos utilizarlas
  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
