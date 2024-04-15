import { createReducer, on, createAction } from '@ngrx/store';

export const userReducer = createReducer(
    { showUserCode: false },
    on(createAction('[User] Toggle User Code'), state => {
        // console.log('original state: ' + JSON.stringify(state));
        return {
            ...state,
            showUserCode: !state.showUserCode
        }
    })



);










