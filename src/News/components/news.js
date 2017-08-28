import React from "react";
// import swipercss from ''; //引入js文件

export default React.createClass({
	render(){
		return(
		<div className="cont">
			<div className="trun">
					<div className="swiper-container">
					    <div className="swiper-wrapper">
					        <div className="swiper-slide slide1"><img src="http://wap.3-dao.com.cn/upload/banner/201703240323041156.jpg" /></div>
					        <div className="swiper-slide slide2"><img src="http://wap.3-dao.com.cn/upload/banner/201703240323438031.jpg" /></div>
					        <div className="swiper-slide slide3"><img src="http://wap.3-dao.com.cn/upload/banner/201703240324321937.jpg"/></div>
					    </div>
					    <div className="swiper-scrollbar"></div>
					</div>
			</div>
			<ul>
				<li>世界那么大 大家好是打发斯蒂芬</li>
				<li>阿斯顿gas的flak受到警方立即离开家了三级地方垃圾啊斯大林法甲联赛地方阿萨德发</li>
				<li>2017-08-27</li>
			</ul>
			<ul>
				<li>世界那么大 大家好是打发斯蒂芬</li>
				<li>阿斯顿gas的flak受到警方立即离开家了三级地方垃圾啊斯大林法甲联赛地方阿萨德发</li>
				<li>2017-08-27</li>
			</ul>
			
		</div>

		)
	},componentDidMount(){		//生命周期函数
		var mySwiper2 = new Swiper('.swiper-container',{
			scrollbar:'.swiper-scrollbar' ,
			scrollbarHide:false,
  		}); 
	}
})
