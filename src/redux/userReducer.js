const initialState = {
  user_name: '',
  user_email: ''
}

const LOGIN = 'LOGIN'

export function login(user_name, user_email){
  return {
    type: LOGIN,
    payload: {user_name, user_email}
  }
}

export default function userReducer(state = initialState, action){
  const {type, payload} = action

  switch(type){
    case LOGIN:
      return {...state, user_name: payload.user_name, user_email: payload.user_email}
    default:
      return state
  }
}