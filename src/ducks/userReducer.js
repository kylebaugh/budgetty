// import axios from 'axios'

// const initialState = {
//     email: null,
//     firstName: null,
//     lastName: null
// }

// const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

// export const requestUserData = () => {
//     let data = axios.get('/auth/user-data').then(res => res.data)
//     return {
//         type: REQUEST_USER_DATA,
//         payload: data
//     }
// }

// export default function reducer(state = initialState, action){
//     switch(action.type){
//         case REQUEST_USER_DATA + "_FULFILLED":
//                 const {email, firstName, lastName} = action.payload.user
//                 return {email, firstName, lastName}
//         default:
//             return state
//     }
// }


import axios from 'axios';

const initialState = {
  email: null,
  firstName: null,
  lastName: null
};

//CREATE THE BASE ACTION TYPES YOU WILL USE
const REQUEST_USER_DATA = 'REQUEST_USER_DATA'


// THE ACTION CREATOR HERE DEFINES AN ACTION TYPE AND PAYLOAD THAT WILL BE USED BY THE REDUCER FUNCTION
// TO UPDATE VALUES IN THE REDUX STORE. THIS FUNCTION ITSELF WILL BE INVOKED IN A 
// COMPONENT VIA PROPS ONCE THAT COMPONENT HAS CONNECTED TO IT VIA THE CONNECT METHOD
export const requestUserData = () => {
  let data = axios.get('/auth/user-data').then(res => res.data)
  return {
    type: REQUEST_USER_DATA,
    payload: data
  }
}

export default function reducer(state = initialState, action) {
// USING A SWITCH STATEMENT INSIDE OF THIS FUNCTION ENABLES THE REDUX STORE TO UPDATE ITS STATE DYNAMICALLY BASED ON THE ACTION TYPE PASSED IN. THIS FUNCTION RUNS WHEN THE ACTION CREATORS ARE INVOKED IN A COMPONENT.

// NOTE: YOU USE THE PROMISE BASED SYNTAX '_FULFILLED' BECAUSE 'FULFILLED'/'PENDING'/'REJECTED' IS ADDED BY REDUX-PROMISE  MIDDLEWARE WHEN MAKING PROMISE BASED REQUESTS (REQUESTS THAT RECEIVE RESPONSES) THROUGH REDUX. ACTIONS THAT AREN'T RELATED TO PPROMISE BASED REQUESTS SHOULD NOT HAVE 'FULFILLED'/'PENDING'/'REJECTED' CONCATENATED TO THEM. IF YOU DIDN'T USE REDUX-PROMISE-MIDDLEWARE, YOU SHOULD ALSO NOT CONCATENATE THOSE STRINGS.
  switch (action.type) {
    case REQUEST_USER_DATA + '_FULFILLED':
      const { email, firstName, lastName } = action.payload.user
      return { email, firstName, lastName };
    default:
      return state;
  }
}
