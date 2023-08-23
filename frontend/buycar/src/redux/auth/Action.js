import axios from 'axios';

let base=`${process.env.REACT_APP_BASE_URL}`

export function signupUser(data,dispatch){
  axios.post(`${base}/users/register`,data )
  .then((res)=>{
    console.log(res);
      dispatch({
          type:"SIGNUP_SUCCESS",
          payload:true
      })
      alert('Signup successful Login Now')
  }).catch((e)=>{
    console.log(e)
      dispatch({
          type:"SIGNUP_FAILURE",
          payload:false,
      })
      alert('signup failed')
  })
}


export function login(data,dispatch){
  axios.post(`${base}/users/login`,data )
      .then((res)=>{
          console.log(res.data)
          localStorage.setItem('cartoken',res.data.token)
          dispatch({
              type:"LOGIN_SUCCESS",
              payload:res.data
          })
          // alert('login successful')
      }).catch((e)=>{
        console.log(e)
          dispatch({
              type:"LOGIN_FAILURE",
              payload:true,

          })
          alert('login failed')
      })
}


export function userIsLoggedIn(authToken,dispatch){
  console.log("user is logged in")
    fetch(`${base}/users/loggedInUser`, {
        headers: {
          'authorization': `Bearer ${authToken}`
        }
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        const user = result.data;
dispatch({
  type:"LOGGEDIN_USER",
  payload:user
})
      })
}


export function allpost(dispatch,param){
  axios.get(`${base}/cars/getcar`, param)
  .then(res=>{
    console.log(res.data)
    dispatch({
      type:"ALL_POST",
      payload:res.data
    })
  })
}

export function newpost(data,dispatch) {
  console.log(data)
  axios.post(`${base}/cars/postcar`,data)
  .then(res=>{
    alert('post created successfully')
  })
  .catch(err=>{
    alert(err)
  })
}


export function commentonpost(data){
  axios.post(`${base}/chat/create`,data)
  .then(res=>{
    console.log(res)
    alert('comment added successfully')
  })
  .catch(err=>{
    console.log(err)
  })
}


export function getcomment(id,dispatch){
    axios.get(`${base}/chat/getchat/${id}`)
    .then(res=>{
console.log(res.data)
dispatch({
  type:'COMMENT',
  payload: res.data
})
    })
.catch(err=>{
  console.log(err)
})
}




