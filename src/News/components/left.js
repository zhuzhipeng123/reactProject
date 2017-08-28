import React from "react";
import {Link} from "react-router";
export default React.createClass({
	render(){
		return(
			<div className="left">
				<div className="header">
					<div className="logo"></div>
				</div>
				<ul>
					<li>
						<div className="nav navP1">
							<p className="p1 icon iconfont icon-home"></p>
						</div>	
						<p className="p2">首页</p>
						
					</li>
					<li>
						<div className="nav" onClick={this.menu}>
							<p className="p1 icon iconfont icon-paoche"></p>
						</div>	
						<p className="p2">汽车</p>
						
					</li>
					<li>
						<div className="nav">
							<p className="p1 icon iconfont icon-IT"></p>
						</div>	
						<p className="p2">IT</p>
						
					</li>
					<li>
						<div className="nav">
							<p className="p1 icon iconfont icon-xiutianyuana"></p>
						</div>	
						<p className="p2">农业</p>
						
					</li>
					<li>
						<div className="nav">
							<p className="p1 iconfont icon-wuliu"></p>
						</div>	
						<p className="p2">物流</p>
						
					</li>
					<li>
						<div className="nav">
							<p className="p1 iconfont icon-taideng"></p>
						</div>	
						<p className="p2">房产</p>
						
					</li>
					<li>
						<div className="nav">
							<p className="p1 icon iconfont icon-jinrong"></p>
						</div>	
						<p className="p2">金融</p>
						
					</li>

				</ul>
			</div>	
		)
	}
})
