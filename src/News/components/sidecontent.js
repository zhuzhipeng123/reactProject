import React from "react";

import Head from "../containers/header";		//连接 容器组件
import Left from "../containers/left";
import Right from "../containers/right";


var Sidecontent = React.createClass({		//创建虚拟组件
	render(){
		return(
			<div className="sidecontent">
				<Head/>
				<div className="content">
					{this.props.children}
				</div>
				<Left/>
				<Right/>
			</div>
		)
	}
})
export default Sidecontent;				//	导出组件