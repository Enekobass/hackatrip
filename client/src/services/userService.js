const { VITE_API_URL } = import.meta.env;

export const signUpService = async (username, email, password) => {
  const res = await fetch(`${VITE_API_URL}/users/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.message;
};

export const signInService = async (email, password) => {
  const res = await fetch(`${VITE_API_URL}/users/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }

  return body.data.token;
};

export const activateUserService = async (registrationCode) => {
  const res = await fetch(
    `${VITE_API_URL}/users/validate/${registrationCode}`,
    {
      method: 'put',
    }
  );

  const body = await res.json();

  if (body.status === 'error') {
    throw new Error(body.message);
  }
};

export const getPrivateProfileService = async (authToken) => {
  const res = await fetch(`${VITE_API_URL}/users`, {
    headers: {
      Authorization: authToken,
    },
  });

  const body = await res.json();

  return body.data?.user;
};