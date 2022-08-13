export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Expresion para limpiar parrafo de summary
export const reg = /<\/?b?a? ?[a-zA-z]*=?[="a-z:./-]*[0-9]*"?>?/gim;
