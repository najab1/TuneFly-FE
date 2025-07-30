import axios from "axios";
import { jwtDecode } from "jwt-decode";

export interface UploadAvatarResponse {
    status: string;
    uploadavatar: {
        avatar: string;
        userId: string;
        [key: string]: any;
    };
}

export const uploadAvatar = async (
    imageFile: File,
    token: string
): Promise<UploadAvatarResponse> => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const decoded: any = jwtDecode(token);
    const uuid = decoded?.uuid;
    if (!uuid) throw new Error("Invalid token: UUID missing");
    formData.append("uuid", uuid);

    // ← Tell axios what shape to expect:
    const response = await axios.post<UploadAvatarResponse>(
        `${import.meta.env.VITE_API_BASE_URL}api/user/upload/avatar`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};
