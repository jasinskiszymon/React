import {ISingleComment} from '../../Apitypes/comment';

export const GET_COMMENT = "GET_COMMENT";

export interface ICommentTypes {
  GET_COMMENT: {
    usersComment: ISingleComment[];
  };
}