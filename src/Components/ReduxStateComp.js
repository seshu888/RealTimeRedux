import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../redux/actions'

class ReduxStateComp extends Component {
	state = {
        users:[]
    };
 

	render() {
        return <div>
            <p onClick={this.props.getPosts}>Api call</p>
        
            <p>{this.props.users && this.props.users.map((item,index)=>(
                <div key="index">
                    {item.id}
                </div>
            ))}</p>
        </div>;
    }


}
const  mapStateToProps=(state)=>{
    return{
        users:state.posts.posts
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getPosts:()=>dispatch(getPosts())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReduxStateComp)

