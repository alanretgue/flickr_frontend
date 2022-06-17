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

export interface LocationContent {
    _content: string;
    woeid: string;
}

export interface Location {
    latitude: number;
    longitude: number;
    accuracy: number;
    context: number;
    locality: LocationContent;
    county: LocationContent;
    region: LocationContent;
    country: LocationContent;
    neighbourhood: LocationContent;
}

export interface PhotoLocation {
    id?: string;
    location?: Location;
    stat : string;
    code?: number;
    message?: string;
}

export interface RequestLocationApi {
    location: PhotoLocation;
}

export interface Comment {
    id: string;
    author: string;
    author_is_deleted: number;
    authorname: string;
    iconserver: string;
    iconfarm: number;
    datecreate: string;
    permalink: string;
    path_alias: string;
    realname: string;
    _content: string;
}

export interface Comments {
    photo_id: string;
    comment: Comment[];
}
export interface RequestCommentsApi {
    comments: Comments;
    stat: string;
}