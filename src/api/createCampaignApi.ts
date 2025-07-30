import axios from "axios";

interface UploadMediaResponse {
    status: string;
    media: string;
}
interface UploadCoverResponse {
    status: string;
    cover: string;
}

interface CampaignPayload {
    userId: string;
    media: File;
    artistname: string;
    genre: string;
    songname: string;
    country: string;
    cover: File;
    budgetplan: string;
    budgetamount: string;
    startDateTime: string;
    endDateTime: string;
    token: string;
}

export const createCampaign = async (data: CampaignPayload): Promise<void> => {
    const {
        userId, media, cover,
        artistname, genre, songname, country,
        budgetplan, budgetamount, startDateTime, endDateTime,
        token
    } = data;

    // 1) upload media
    const mediaForm = new FormData();
    mediaForm.append("media", media);
    const mediaRes = await axios.post<UploadMediaResponse>(
        `${import.meta.env.VITE_API_BASE_URL}api/user/artistlibrary/media?userId=${userId}`,
        mediaForm
    );
    const mediaFilename = mediaRes.data.media;

    // 2) upload cover
    const coverForm = new FormData();
    coverForm.append("cover", cover);
    const coverRes = await axios.post<UploadCoverResponse>(
        `${import.meta.env.VITE_API_BASE_URL}api/user/artistlibrary/cover?userId=${userId}`,
        coverForm,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    const coverFilename = coverRes.data.cover;

    // 3) create the DB record
    await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}api/user/artistlibrary`,
        {
            userId,
            artistname,
            songname,
            genre,
            country,
            cover: coverFilename,
            media: mediaFilename,
            subscription: true,
            budgetplan,
            budgetamount,
            startDateTime,
            endDateTime
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );

    console.log("Campaign created ✅");
};
