import axios from 'axios';

export interface LoginPayload {
  email: string;
  password: string;
  usertype: 'artist' | 'driver'; 
}

export const login = async (payload: LoginPayload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
    payload,
    { withCredentials: true }
  );

  return response.data;
};
