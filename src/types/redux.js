/* @flow */
import typeof { LOADING_STATE } from '../constants';

export type State = {};

export type Action<T> = {
  type: string,
  payload?: T,
};

export type Dispatch = any => any;

export type GetState = () => State;

export type AuthState = {
  token: ?string,
  authLoadingState: $Keys<LOADING_STATE>,
};

export type AppState = {
  auth: AuthState,
};

export type ReceiveLoginPayload = {
  token: string,
};

export type ReceiveAuthPayload = ReceiveLoginPayload;
