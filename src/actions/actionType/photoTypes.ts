import { ISinglePicture } from '../../Apitypes/picture';

export const GET_PHOTO = "GET_PHOTO";

export interface IPhotoTypes {
  GET_PHOTO: {
    photoList: ISinglePicture[];
  };
}