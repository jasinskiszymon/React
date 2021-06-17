import {ISinglePost} from '../../Apitypes/post';

export const GET_POST = "GET_POST";

export interface IPostTypes {
  GET_POST: {
    userspost: ISinglePost;
  };
}