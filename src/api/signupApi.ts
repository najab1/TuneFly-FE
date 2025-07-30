import api from './axios';

export interface SignupPayload {
    email: string;
    username: string;
    password: string;
    name: string;
    phonenumber?: string;
    country: string;
    usertype: 'artist' | 'driver';
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
    // Step 1: Signup
    const signupResponse = await api.post<SignupResponse>('/api/auth/signup', data);

    return signupResponse.data;
};
