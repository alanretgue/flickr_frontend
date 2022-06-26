export interface PhotoInfo {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfamily: number;
    display_info: boolean;
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
    code?: number;
    message?: string;
}

export interface RequestLocationApi {
    photo: PhotoLocation;
    stat : string;
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

export interface Content {
    _content: string
}

export interface Gallerie { 
    id: string;
    gallery_id: string;
    url: string;
    owner: string;
    username: string;
    iconserver: string;
    iconfarm: Number;
    primary_photo_id: string;
    date_create: string;
    date_update: string;
    count_photos: Number;
    count_videos: Number;
    count_total: Number;
    count_views: Number;
    count_comments: Number;
    title: Content;
    description: Content;
    sort_group: string;
    primary_photo_server: string;
    primary_photo_farm: Number;
    primary_photo_secret: string
}

export interface Galleries {
    total: Number;
    per_page: Number;
    user_id: string;
    continuation: Number
    gallery: Gallerie[]
}
export interface RequestGalleryListApi {
    galleries: Galleries;
    stat: string
}

export interface Profile {
    id: string;
    nsid: string;
    join_date: string;
    occupation: string;
    hometown: string;
    showcase_set: string;
    showcase_set_title: string;
    first_name: string;
    last_name: string;
    profile_description: string;
    website: string;
    city: string;
    country: string;
    facebook: string;
    twitter: string;
    tumblr: string;
    instagram: string;
    pinterest: string
}

export interface RequestProfileApi { 
    profile: Profile;
    stat: string 
}