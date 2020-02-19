import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};

const getProductFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getProductFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getProductFeatureState,
  state => state.currentUser
);

export function reducer(state = initialState, action): UserState {
  switch (action.type) {

    case 'MASK_USER_NAME':
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
