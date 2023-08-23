import axios from 'axios';

let base=`${process.env.REACT_APP_BASE_URL}`

export function signupUser(data,dispatch){
  axios.post(`${base}/users/register`,data )
  .then((res)=>{
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
    dispatch({
      type:"ALL_POST",
      payload:res.data
    })
  })
}

export function newpost(data,dispatch) {
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
    alert('comment added successfully')
  })
  .catch(err=>{
    console.log(err)
  })
}


export function getcomment(id,dispatch){
    axios.get(`${base}/chat/getchat/${id}`)
    .then(res=>{
dispatch({
  type:'COMMENT',
  payload: res.data
})
    })
.catch(err=>{
  console.log(err)
})
}


export function getinventory(id,dispatch){
  axios.get(`${base}/cars/getinventory/${id}`)
  .then(res=>{
    dispatch({
      type:"GET_INVENTORY",
      payload:res.data
    })
  }).catch(err=>{
    console.log(err)
  })
}


export function filterpost(param,dispatch){
  console.log(param)
  axios.get(`${base}/cars/getcar?${param}`)
  .then(res=>{
    console.log(res)
    console.log(res)
    console.log(res)
    dispatch({
      type:"FILTER_POST",
      payload:res.data
    })
  }).catch(err=>{
    console.log(err)
  })
}

export function updatethis(id,data,dispatch){
  axios.put(`${base}/cars/update/${id}`,data)
  .then(res=>{
    alert("update successfully")
  }).catch(err=>{console.log(err)});
}

export function deleteObj(id){
  axios.delete(`${base}/cars/delete/${id}`)
  .then(res=>{
    alert("delete successfully")
  }).catch(err=>{console.log(err)});
}



