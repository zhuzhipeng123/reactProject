import React from "react";
import {hashHistory} from "react-router";

export default React.createClass({
	render(){
		return(
			<div className="register">
				<div className="login_head"> <p className="icon iconfont icon-xia" onClick = {this.backClick}></p> </div>
				
				<div className="login_con">
				<div className="user">
					<input type="text" placeholder="用户名" className="ipt1"/>
				</div>
				<div className="pwd">
					<input type="password" placeholder="密码" className="ipt2"/>
				</div>
				<div className="pwd_repeat">
					<input type="password" placeholder="确认密码" className="ipt2"/>
				</div>
				</div>

				<div className="btn">
					
					<p className="register">注册</p>
				</div>
			</div>
		)
	},
	backClick(){
		hashHistory.goBack();
	}
})
