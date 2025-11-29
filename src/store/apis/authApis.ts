import axiosInstance from '.';

export const signupApi = async (
  name: string,
  email: string,
  password: string
) => {
  return axiosInstance.post('/auth/signup', {
    name,
    email,
    password,
  });
};

export const signinApi = async (email: string, password: string) => {
  return axiosInstance.post('/auth/login', {
    email,
    password,
  });
};
