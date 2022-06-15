// 1. IMPORTACIONES
import { sum } from './lib/calculadora.js'

// 2. VARIABLES
const getResult = document.querySelector("#get-result")
const result = document.querySelector("#result")

// 3. EVENTOS

getResult.addEventListener("click", (event) => {

    // DETENER LA RECARGA DE P+AGINA POR DEFECTO
    event.preventDefault()

    // ABSTRAIGA LOS DATOS DE LAS VARIABLES
    // OBTENER DATO DE FORMULARIO Y CONVERTIR A "INTEGER"
    const quantityOne = parseInt(form["quantity-one"].value)
    const quantityTwo = parseInt(form["quantity-two"].value)

    const resultSum = sum(quantityOne, quantityTwo)

    return result.innerHTML = resultSum
})