import {Map} from 'immutable';

import * as actionTypes from './constants';


const defaultState = Map({
    menuData:[]
})

function reducer(state = defaultState,action){
    switch (action.type){
        case actionTypes.CHANGE_MENU:
            return state.set('menuData',action.menuData);
        default:
            return state;
    }
}

export default reducer;
