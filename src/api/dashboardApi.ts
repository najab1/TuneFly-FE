import api from './axios';

export interface DashboardRequest {
    userId: string;
}

export interface DashboardResponse {
    impressions: number;
    listener: number;
    totalArtistLibrary: number;
    monthlistener: number;
}

export const fetchDashboard = async (
    data: DashboardRequest
): Promise<DashboardResponse> => {
    const response = await api.post<DashboardResponse>(
        '/api/artist/dashboard',
        data
    );
    return response.data;
};
