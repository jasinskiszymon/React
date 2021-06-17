import {Dispatch} from 'redux';
import * as actionTypes from '../actionType/userTypes';
import {ISingleUser} from '../../Apitypes/users';
import { type } from 'node:os';


export const getUser = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch (`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then((usersList: ISingleUser[]) =>{
        dispatch({
            type: actionTypes.GET_USER,
            usersList,

        })
    })

})as any;


