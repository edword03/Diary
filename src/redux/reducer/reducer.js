import { ADD_NOTE } from '../action/actions';

const reduce = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        
      };
    default:
      return state;
  }
};

export default reduce;
