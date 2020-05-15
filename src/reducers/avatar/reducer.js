import { 
  REQUEST_AVATAR_ITEMS,
  RECEIVE_AVATAR_ITEMS,
  SELECT_CATEGORY,
  ITEM_SELECT
} from './actions';

const initialstate = {
  avatarData: [],
  receivedAt: null,
  // TODO add loading screen
  isFetching: true,

  avatarUri: 'https://api.stadiumliveapp.com/avatars/preview?q=skin%20tone:male_SKIN_LIGHT1', //default

  selected: {
    menu: {
      items: [],
      name: ''
    },
    items: {}
  }
};

export default function(state = initialstate, action) {
  let newState = {...state};
  switch (action.type) {
    case REQUEST_AVATAR_ITEMS:
      return Object.assign({}, newState, {
        isFetching: true
      })
    case RECEIVE_AVATAR_ITEMS:
      // For selected items
      return Object.assign({}, newState, {
        isFetching: false,
        avatarData: action.avatarData,
        // Choose the first one by default
        selected: {
          menu: action.avatarData[0],
          items: newState.selected.items
        }
      })
    case SELECT_CATEGORY:
      return Object.assign({}, newState, {
        selected: {
          menu: state.avatarData[action.index],
          items: newState.selected.items
        }
      })
    case ITEM_SELECT:

      return Object.assign({}, newState, {
        selected: {
          menu: newState.selected.menu,
          items: action.items,
        },
        avatarUri: action.avatarUri,
      })
    default:
      return newState;
  }
}


