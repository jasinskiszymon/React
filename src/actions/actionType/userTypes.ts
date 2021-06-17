import {ISingleComment} from '../../Apitypes/comment';

export const GET_USER = "GET_USER";

export interface IUserTypes {
  GET_USER: {
    usersList: ISingleComment[];
  };
}