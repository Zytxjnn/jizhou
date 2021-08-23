import * as actionTypes from './constants';

const changeMenuDataAction = res => ({
    type:actionTypes.CHANGE_MENU,
    menuData:res
});

export const getMenuDataAction = res => {
    return dispatch => {
        dispatch(changeMenuDataAction(res))
    }
}