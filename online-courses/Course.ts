export interface Course {
    id:number;
    title:string;
    desc:string;
    logo?:string;
    price:number;
    authorId:number
}

export enum COURSE_TYPE {
    WEB,
    MOBILE,
    DATA_SCIENCE
}

