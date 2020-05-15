import axios from 'axios';

const PAUL_URL = "https://paulxuca.api.stdlib.com/"
const STADIUM_LIVE_URL = "https://api.stadiumliveapp.com/"

export const FETCH_AVATAR_ITEMS = 'FETCH_AVATAR_ITEMS'
export function fetchAvatarItems() {
  // TODO caching
  return dispatch => {
    dispatch(requestAvatarItems())
    let url = `${PAUL_URL}/avatar-items@dev/`;
    // TODO error checking
    return axios.get(url).then(response => {
      console.log(response.data.data);
      dispatch(receiveAvatarItems(response.data.data))
    })
  }
}

export const SELECT_CATEGORY = 'SELECT_CATEGORY'
export function selectCategory(categoryIndex) {
  return {
    type: SELECT_CATEGORY,
    index: categoryIndex
  }
}

export const RECEIVE_AVATAR_ITEMS = 'RECEIVE_AVATAR_ITEMS'
function receiveAvatarItems(avatarData) {
  return {
    type: RECEIVE_AVATAR_ITEMS,
    avatarData,
    receivedAt: Date.now()
  }
}


export const REQUEST_AVATAR_ITEMS = 'REQUEST_AVATAR_ITEMS'
function requestAvatarItems() {
  return {
    type: REQUEST_AVATAR_ITEMS
  }
}

export const ITEM_SELECT = 'ITEM_SELECT'
export function itemSelect(itemGroupId) {
  return (dispatch, getState) => {
    let state = getState()
    let newSelectedItems = state.avatar.selected.items
    newSelectedItems[state.avatar.selected.menu.name] = itemGroupId

    let customizations = []
    for (let selectedItem in newSelectedItems){
      customizations.push(`${selectedItem}:${newSelectedItems[selectedItem]}`)
    }
    let paramStr = customizations.join()

    let avatarUri = `${STADIUM_LIVE_URL}avatars/preview?q=skin%20tone:male_SKIN_LIGHT1,${paramStr}`

    dispatch({
      type: ITEM_SELECT,
      items: newSelectedItems,
      avatarUri,
    })
  }
}
