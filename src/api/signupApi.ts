import api from './axios';

export interface SignupPayload {
    email: string;
    username: string;
    password: string;
    name: string;
    phonenumber?: string;
    country: string;
    usertype: 'artist' | 'driver';

    // Only for driver (optional in form, but required if usertype === "driver")
    cartype?: string;
    make?: string;
    model?: string;
    year?: string;
}

export interface SignupResponse {
    status: string; // "success"
    user: string;   // "Account create successfully && Otp send"
}

export const signup = async (data: SignupPayload): Promise<SignupResponse> => {
    const response = await api.post<SignupResponse>('/auth/signup', data);
    return response.data;
};
