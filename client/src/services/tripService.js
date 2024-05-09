const { VITE_API_URL } = import.meta.env;

export const createTripService = async (titulo, descripcion, destino, fechaDeInicio, fechaDeFin, plazasMinimas, plazasMaximas, ruta, precio, photo, activo, confirmado, authToken) => {
  const formData = new formData();
  formData.append("titulo", titulo);
  formData.append("descripcion", descripcion);
  formData.append("destino", destino);
  formData.append("fechaDeInicio", fechaDeInicio);
  formData.append("fechaDeFin", fechaDeFin);
  formData.append("plazasMinimas", plazasMinimas);
  formData.append("plazasMaximas", plazasMaximas);
  formData.append("ruta", ruta);
  formData.append("precio", precio);
  formData.append("photo", photo);
  formData.append("activo", activo);
  formData.append("confirmado", confirmado);
  const res = await fetch(`${VITE_API_URL}/viajes`, {
    method: 'post',
    headers: {
      Authorization: authToken,
      // Puedes agregar cualquier encabezado adicional necesario, como el token de autorización si es necesario
    },
    body: formData,
  });

  const body = await res.json();

  if (body.status === "error") {
    throw new Error(body.message);
  }

  return body.message; // Suponiendo que tu backend devuelve los datos del nuevo viaje creado
};

// //export const updateTripService = async (tripId, tripData) => {
//   const res = await fetch(`${VITE_API_URL}/update-trip-endpoint/${tripId}`, {
//     method: 'put',
//     headers: {
//       'Content-Type': 'application/json',
//       // Puedes agregar cualquier encabezado adicional necesario, como el token de autorización si es necesario
//     },
//     body: JSON.stringify(tripData),
//   });

//   const body = await res.json();

//   if (res.status !== 200) {
//     throw new Error(body.message);
//   }

//   return body.data; // Suponiendo que tu backend devuelve los datos del viaje actualizado
// };//
