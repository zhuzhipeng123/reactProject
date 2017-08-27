import React from "react";
import {Link} from "react-router";
export default React.createClass({
	render(){
		return(
			<div className="right">
				<div className="nav">
					<div className="peo_l icon iconfont icon-weibiaoti-"></div>
					<div className="peo_r">
						<p className="p1"><Link to="/login">点击登录</Link></p>
						<p className="p2">与好友一起分享咨询</p>
					</div>
				</div>
				<ul>
					<li>
						<span className="spn1 icon iconfont icon-sousuo"></span>
						<span className="spn2">搜索新闻</span>
						<span className="spn3 icon iconfont icon-xia"></span>
					</li>
					<li>
						<span className="spn1 icon iconfont icon-sousuo"></span>
						<span className="spn2">软件设置</span>
						<span className="spn3 icon iconfont icon-xia"></span>
					</li>
					<li>
						<span className="spn1 icon iconfont icon-sousuo"></span>
						<span className="spn2">版权声明</span>
						<span className="spn3 icon iconfont icon-xia"></span>
					</li>
				</ul>

			</div>	
		)
	}
})
