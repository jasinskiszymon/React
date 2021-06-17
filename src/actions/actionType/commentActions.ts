import {Dispatch} from 'redux';
import * as actionTypes from './commentType';
import {ISingleComment} from '../../Apitypes/comment';



export const getComment = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch (`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then((usersComment: ISingleComment[]) =>{
        dispatch({
            type: actionTypes.GET_COMMENT,
            usersComment,

        })
    })

})as any;


