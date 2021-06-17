import {Dispatch} from 'redux';
import * as actionTypes from '../actionType/photoTypes';
import {ISinglePicture} from '../../Apitypes/picture';
import { type } from 'node:os';


export const getPhoto = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch (`https://jsonplaceholder.typicode.com/photos`)
    .then(response => response.json())
    .then((photoList: ISinglePicture[]) =>{
        dispatch({
            type: actionTypes.GET_PHOTO,
            photoList,
        }
        )
    })

})as any;
