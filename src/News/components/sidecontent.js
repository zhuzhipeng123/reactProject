import React from "react";

import Head from "../containers/header";		//连接 容器组件



var Sidecontent = React.createClass({		//创建虚拟组件
	render(){
		return(
			
			<div className="sidecontent">
				<Head/>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		)
	}
})
export default Sidecontent;				//	导出组件