import React from "react";

import {Link} from "react-router";
import Head from "../containers/head";

export default React.createClass({
	render(){
		return (
			<div className="head">
				<Head/>
				<div>
					{
						this.props.children
					}
				<div>
			</div>
		)
	}	
})