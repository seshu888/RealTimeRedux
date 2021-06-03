import axios from 'axios';
import { GET_POSTS_SUCC, GET_POSTS_REQ, GET_POSTS_FAIL } from './actionTypes';

export const getPostsReq = () => {
	return {
		type: GET_POSTS_REQ
	};
};
export const getPostsSucc = (users) => {
	return {
        type: GET_POSTS_SUCC,
        data:users
	};
};

export const getPostsFail = (error) => {
	return {
        type: GET_POSTS_FAIL,
        data:error
	};
};
export const getPosts = () => {
	return function(dispatch) {
		dispatch(getPostsReq());
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then((resp) => {
				let users = resp.data;
				dispatch(getPostsSucc(users));
			})
			.catch((err) => {
				dispatch(getPostsFail(err));
			});
	};
};
