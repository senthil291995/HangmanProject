import { constant } from './constants';

export const endpoints = {
  getDogList(): () => {
    return `${constant.host}/breeds/list/all`;
  }
}
