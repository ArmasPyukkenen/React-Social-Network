import samuraiAPI from '../DAL/api';

const SET_AUTHORIZED = "SET_AUTHORIZED";
const SET_UNAUTHORIZED = "SET_UNAUTHORIZED";

const initialState = {
  login: null,
  userId: null,
  email: null,
  //isAuth: false
  isAuth: null
};

const reduceAuthorization = (state = initialState, action) => {
  switch (action.type){
    case SET_AUTHORIZED:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    case SET_UNAUTHORIZED:
      return {
        ...state,
        login: null,
        userId: null,
        email: null,
        isAuth: false
      }
    default:
      return state;
  }
}

export const setUserAuthorizationAC = ({login, id: userId, email}) => ({ type: SET_AUTHORIZED, data : {login, userId, email}});
export const logOutAC = () => ({type: SET_UNAUTHORIZED});

export const authorizeUser = () => dispatch => {
  samuraiAPI.getLoggedUserInfo()
    .then( data => {
      if(data.resultCode === 0) {
        dispatch(setUserAuthorizationAC(data.data));
      } else {
        dispatch(logOutAC)
      }
    })
}

export const logIn = (email, password, rememberMe, captcha) => dispatch => {
  samuraiAPI.login(email, password, rememberMe, captcha)
  .then(userId => {
    dispatch(authorizeUser())
  })
  .catch(msg => {
    console.error(msg)
  })
}

export const logOut = () => dispatch => {
  samuraiAPI.logout().then(resultCode => {
    if (resultCode === 0) {
      dispatch(logOutAC())
    }
  })
}

export default reduceAuthorization;