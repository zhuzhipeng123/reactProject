import React from "react";
import {hashHistory,Link} from "react-router";

export default React.createClass({
	render(){
		return(
			<div className="login">
				<div className="login_head"> <p className="icon iconfont icon-xia" onClick = {this.backClick}></p> </div>
				
				<div className="login_con">
				<div className="user">
					<input type="text" placeholder="用户名" className="ipt1"/>
				</div>
				<div className="pwd">
					<input type="password" placeholder="密码" className="ipt2"/>
				</div>
				</div>

				<div className="btn">
					<p className="login">登陆</p>
					<p className="register"> <Link to="/register">注册</Link> </p>
				</div>
			</div>
		)
	},
	backClick(){
		hashHistory.go(-1);
	}
})
