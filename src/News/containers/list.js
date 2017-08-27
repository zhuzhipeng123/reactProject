import {connect} from "react-redux";

import List from "../components/list";

const mapStateToProps = (state,ownProps)=>{
	return {
		newslist:state.newsList
	}
}

const mapDispatchToProps = (state,ownProps)=>{
	return{
		
	}

}
export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(List)