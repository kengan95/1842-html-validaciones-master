import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//seleccionamos todos los input

//“blur” o cuando quite el input o el foco de ese espacio o de ese input
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
