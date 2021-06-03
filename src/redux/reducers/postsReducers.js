import {GET_POSTS_REQ,GET_POSTS_SUCC,
    GET_POSTS_FAIL} from '../actions/actionTypes';


const initialState={
    posts:[],
    error:'',
    isLoading:false,
}
const postsReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_POSTS_REQ:
            return {...state,isLoading:true}
          case GET_POSTS_SUCC:
            return {isLoading:false,posts:action.data,error:''}
          case GET_POSTS_FAIL:
            return {isLoading:false,posts:[],error:action.data}
          default:
            return state;
    }
}
export default postsReducer