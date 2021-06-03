import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../redux/actions';

function ReduxFunComp(props) {
    const [ postData, setPostDate ] = useState([]);
    let posts = useSelector((state) => state.posts.posts);
	const hadleGetPosts = () => {
		{
			props.getPosts();
		}

		setPostDate(posts);
	};

	return (
		<div>
			<p onClick={hadleGetPosts}>Api call</p>

			<p>{postData && postData.map((item, index) => <div key="index">{item.id}</div>)}</p>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			getPosts
		},
		dispatch
	);
};
export default connect(null, mapDispatchToProps)(ReduxFunComp);
