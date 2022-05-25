export interface PhotoInfo {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfamily: number;
}

export interface PhotosObj {
    page: number;
    pages: number;
    prepage: number;
    total: string;
    photo: PhotoInfo[];
}

export interface RequestApi {
    photos: PhotosObj;
}