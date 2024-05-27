const { VITE_API_URL } = import.meta.env;

export const createTripService = async ({
  titulo,
  descripcion,
  destino,
  fechaDeInicio,
  fechaDeFin,
  plazasMinimas,
  plazasMaximas,
  itinerario,
  precio,
  photo,
  activo,
  authToken,
}) => {
  const formData = new FormData();

  formData.append('titulo', titulo);

  formData.append('descripcion', descripcion);

  formData.append('destino', destino);

  formData.append('fechaDeInicio', fechaDeInicio);

  formData.append('fechaDeFin', fechaDeFin);

  formData.append('plazasMinimas', plazasMinimas);

  formData.append('plazasMaximas', plazasMaximas);

  formData.append('itinerario', itinerario);

  formData.append('precio', precio);

  formData.append('photo', photo[0]);

  formData.append('activo', activo);

  const res = await fetch(`${VITE_API_URL}/viajes`, {
    method: 'post',
    headers: {
      Authorization: authToken,
      // Puedes agregar cualquier encabezado adicional necesario, como el token de autorización si es necesario
    },
    body: formData,
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message; // Suponiendo que tu backend devuelve los datos del nuevo viaje creado
};

export const selectTripByIdService = async (viajeId, authToken) => {
  const res = await fetch(`${VITE_API_URL}/viajes/${viajeId}`, {
    headers: {
      Authorization: authToken,
      // Puedes agregar cualquier encabezado adicional necesario, como el token de autorización si es necesario
    },
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.data;
};

export const updateTripService = async ({
  titulo,
  descripcion,
  destino,
  fechaDeInicio,
  fechaDeFin,
  plazasMinimas,
  plazasMaximas,
  itinerario,
  precio,
  photo,
  activo,
  viajeId,
  authToken,
}) => {
  const formData = new FormData();

  formData.append('titulo', titulo);

  formData.append('descripcion', descripcion);

  formData.append('destino', destino);

  formData.append('fechaDeInicio', fechaDeInicio);

  formData.append('fechaDeFin', fechaDeFin);

  formData.append('plazasMinimas', plazasMinimas);

  formData.append('plazasMaximas', plazasMaximas);

  formData.append('itinerario', itinerario);

  formData.append('precio', precio);

  formData.append('photo', photo[0]);

  formData.append('activo', activo);

  console.log(formData);

  const res = await fetch(`${VITE_API_URL}/viajes/${viajeId}/modificarviaje`, {
    method: 'put',
    headers: {
      Authorization: authToken,
      // Puedes agregar cualquier encabezado adicional necesario, como el token de autorización si es necesario
    },
    body: formData,
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message; // Suponiendo que tu backend devuelve los datos del nuevo viaje creado
};

export const selectAllTripsService = async (searchParams) => {
  const res = await fetch(`${VITE_API_URL}/todosviajes?${searchParams}`);

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.data.viajesFiltrados;
};

export const insertTripVoteService = async (value, viajeId, authToken) => {
  const res = await fetch(
    `${VITE_API_URL}/viajes/${viajeId}/coordinadorvotes`,
    {
      method: 'post',
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: Number(value),
      }),
    }
  );

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return {
    message: body.message,
    votes: body.data.trip.votes,
  };
};

export const bookTripService = async (viajeId, authToken) => {
  const res = await fetch(
    `${VITE_API_URL}/viajes/${viajeId}/reservarycancelar`,
    {
      method: 'post',
      headers: {
        Authorization: authToken,
        'Content-Type': 'application/json',
      },
    }
  );

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};

export const LoadPostService = async (
  title,
  description,
  photo,
  value,
  viajeId,
  authToken
) => {
  const formData = new FormData();

  formData.append('title', title);

  formData.append('description', description);

  formData.append('photo', photo[0]);

  formData.append('value', value);

  const res = await fetch(`${VITE_API_URL}/viajes/${viajeId}/addpost`, {
    method: 'post',
    headers: {
      Authorization: authToken,
    },
    body: formData,
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};
