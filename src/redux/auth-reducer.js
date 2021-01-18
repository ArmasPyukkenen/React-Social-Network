const AUTHORIZE_USER = "AUTHORIZE_USER";


const initialState = {
  login: null,
  userId: null,
  email: null,
  isAuth: false
};

const reduceAuthorization = (state = initialState, action) => {
  switch (action.type){
    case AUTHORIZE_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state;
  }
}

export const authorizeUser = ({login, id: userId, email}) => ({ type: AUTHORIZE_USER, data : {login, userId, email}});

export default reduceAuthorization;