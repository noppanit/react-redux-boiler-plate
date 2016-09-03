/**
 * Another clever approach of writing reducers:
 *
 * export default function(state = initialState, action) {
 *   const actions = {
 *      [ACTION_TYPE]: () => [action.payload.data, ...state]
 *   };
 *
 *   return (_.isFunction(actions[action.type])) ? actions[action.type]() : state
 * }
 */

import { assign } from 'lodash';

const initialState = {
  friends: ['friend1']
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'NOTHING':
      console.log('No op');
      return state;

    default:
      return state;
  }
}
