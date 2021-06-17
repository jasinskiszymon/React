import {ISingleUser} from '../Apitypes/users';
import {ISinglePost} from '../Apitypes/post';
import { ISinglePicture} from '../Apitypes/picture';
import { ISingleComment } from '../Apitypes/comment';

import * as actionTypes from '../actions/actionType/userTypes';
import * as AcTypes from '../actions/actionType/photoTypes';
import * as ActionPost from '../actions/actionType/postTypes';
import * as actionComment from '../actions/actionType/commentType';



import { platform } from 'node:os';
import { stringify } from 'node:querystring';
import { FormikProvider } from 'formik';


export interface IUserReducers {
  usersList: ISingleUser[];
  usersPost: ISinglePost [];
  userComment: ISingleComment [];
  userPhoto: ISinglePicture[];
}

const defaultState = (): IUserReducers => ({
  usersList: [],
  usersPost: [],
  userPhoto: [],
  userComment:[]
 
})

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case actionTypes.GET_USER: {
      const payload: actionTypes.IUserTypes["GET_USER"] = action;
      return {
        ...state,
        usersList: payload.usersList
      }
    }
    case ActionPost.GET_POST: {
      const payload:ActionPost.IPostTypes["GET_POST"] = action;
      return{
        ...state,
        usersPost: payload.userspost
      }
    }
    case AcTypes.GET_PHOTO: {
      const payload:AcTypes.IPhotoTypes["GET_PHOTO"] = action;
      return{
        ...state,
        userPhoto: payload.photoList
      }
    }
    case actionComment.GET_COMMENT: {
      const payload:actionComment.ICommentTypes["GET_COMMENT"] = action;
      return{
        ...state,
        userComment: payload.usersComment,
      }
    }
    default: {
      return state;
    }
  }
};