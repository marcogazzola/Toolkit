import { ADD_BUG, CLOSE_BUG } from './../actions/BugActions';

const bugs = (state = [], action) => {
  switch (action.type) {
    case ADD_BUG:
      return [
        ...state,
        {
          newBag: action.newBag,
          closed: false,
        },
      ];
    case CLOSE_BUG:
      return state.map((bug, index) => {
        if (index === action.index) {
          return Object.assign({}, bug, {
            closed: !bug.closed,
          });
        }
        return bug;
      });
    default:
      return state;
  }
};

export default bugs;
