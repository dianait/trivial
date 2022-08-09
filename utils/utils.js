export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
export function getPercent(aciertos, preguntas) {
  return (aciertos / preguntas) * 100;
}

export const getTextResult = (porcentaje) => {
  if (porcentaje < 20) return 5;
  else if (porcentaje > 20 && porcentaje < 40) return 4;
  else if (porcentaje > 40 && porcentaje < 60) return 3;
  else if (porcentaje > 60 && porcentaje < 80) return 2;
  else return 1;
};
