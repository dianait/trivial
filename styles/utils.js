// Le pasas un color en hexadecimal y una opacidad (de 0 a 1)
// y te devuelve el hexadecimal con la opacidad incluidad en el código
export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};

// Source => https://www.esthersola.com/transparencia-color-hexadecimal/

// Coge todos los inputs del formulario, a través del elemento evt, y los guarda en un array
// el key del array es el id del input y el value es el valor escrito por el usuario en el input
export const getDataFromForm = (evt) => {
  let dataForm = [];
  const objectData = evt.target.querySelectorAll("input");
  // objectData es objeto que hay que trasformar a un array así:
  // Source for object to array => https://stackoverflow.com/questions/41486296/convert-object-to-array-in-javascript-react
  const arrayData = Object.values(objectData);

  // Con esto añadimos un objeto {key: "tal" value: "pascual"}
  // por cada input del formulario al array dataForm
  arrayData.map((d) => {
    return (dataForm = [{ key: d.id, value: d.value }, ...dataForm]);
  });

  return dataForm;
};
