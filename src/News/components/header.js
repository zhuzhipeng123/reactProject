import React from "react";

import {Link} from "react-router";

export default React.createClass({
	getInitialState: function() {
    	return {
    		leftShowOrHide:false,
    		rightShowOrHide:false,
    	};
	},
	render(){
		return (
			<div className="head">
				<span className="spnL iconfont iconfont icon-1" onClick={this.leftClick}></span>
				<span className="spnR icon iconfont icon-caidan" onClick={this.rightClick}></span>
			</div>
		)
	},
	leftClick(){
		if(this.state.leftShowOrHide){
			$(".sidecontent").animate({left:"0px"},400);
		}else{
			$(".sidecontent").animate({left:"50%"},400);
		}
		this.setState({leftShowOrHide:!this.state.leftShowOrHide});
	},
	rightClick(){
		if(this.state.rightShowOrHide){
			$(".sidecontent").animate({left:"0"},400);
		}else{
			$(".sidecontent").animate({left:"-50%"},400);
		}
		this.setState({rightShowOrHide:!this.state.rightShowOrHide});
	}	
})