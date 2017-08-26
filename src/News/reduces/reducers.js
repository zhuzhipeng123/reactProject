var defaultState = {
	footList:[
		{txt:"NEWS",path:"/news"},
		{txt:"LABS",path:"/labs"}
	]
}
export default (state=defaultState,action)=>{
	
	switch(action.type){
		/*case "changeHeadTitle":
		state.title = action.title;
		return Object.assign({},state);
		break;

		case "changeIndex":
		console.log("assdsdsadsadsadsa")
		console.log(action.idx);
		state.title = state.footList[action.idx].txt;
		console.log(state.title)
		return Object.assign({},state);

		break;*/


		default:
		return Object.assign({},state);
		break;
	}
}
