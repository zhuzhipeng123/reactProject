import React from "react";
import ReactDOM from "react-dom";

// import "../styles/weixin.scss";

import {Router,Route,hashHistory,browserHistory,IndexRedirect,IndexRoute} from "react-router";

import {Provider} from "react-redux";

import store from "./store/store";


import "../styles/news.scss";		//scss 引入

import Sidecontent from "./containers/sidecontent";
import Head from "./containers/header";
import News from "./containers/news";
import Login from "./containers/login";		//引入
import List from "./containers/list";
import Register from "./containers/register";
import Right from "./containers/right";
import Left from "./containers/left";


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Sidecontent}>
				<IndexRedirect to="/news"/>				//设置默认页面  小写
				<Route path="news" component={News}></Route> 
				<Route path="list" component={List}></Route> 
			</Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/register" component={Register}></Route>
		</Router>
	</Provider>,
	document.getElementById("all")
)




