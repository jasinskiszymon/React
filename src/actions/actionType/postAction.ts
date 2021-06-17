import {Dispatch} from 'redux';
import * as actionTypes from '../actionType/postTypes';
import {ISinglePost} from '../../Apitypes/post';
import { type } from 'node:os';


export const getPost = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch (`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then((userspost: ISinglePost[]) =>{
        dispatch({
            type: actionTypes.GET_POST,
            userspost

        })
    })

})as any;