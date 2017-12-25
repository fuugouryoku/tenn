<template>
	<div class="all">
  <section class="first">
  	 <div class="center">
  	 <div class="box part1 lightcoral"><font class="logo p80">天</font></div>
  	 <div class="box part2 lightcoral"><img src="../assets/img/part2.png"/></div>
  	 <div class="box part3 lightcoral"><font class="logo p40">古琴</font></div>
  	 <div class="box part4 lightcoral"><font class="logo p80">趣</font></div>
  	 </div>
  	 <div class="seal"><img src="../assets/img/seal.gif"/></div>
  	 <div class="company">
  	 <div><font>天趣古琴工作室</font></div>
  	 <div><font>TIANQUGUQIN STUDIO</font></div>
  	 </div>
  </section>
 <section class="second">
  	  <div class="firstpic">
  	  	<img src="../assets/img/studio1.jpg" />
  	  	<div class="desc"><p>
  	     本方案是围绕现代简约为主题，适合于30岁左右的三口之家居住，再加上中式的设计元素在里面。
		相互结合，相交融。以简洁明快的设计风格为主调，简洁和实用是现代简约风格的基本特点。简约风
		格已经大行其道几年了，仍然保持很猛的势头，这是因为人们装修时总希望在经济、实用、舒适的同
		时，体现一定的文化品味。而简约风格不仅注重居室的实用性，而且还体现出了现代社会生活的精致
		与个性，符合现代人的生活品位。全面考虑，在总体布局上方面尽量满足业主生活的需求，主要装修
		材料以樱桃木，壁纸为主，以樱桃木的优美含蓄，壁纸的朴素大方来装饰墙面的景点。更体现现代简
		约的之感。创造一个温馨，健康的家庭环境。
  	  	</p></div>
  	  </div>
  	  <div class="otherpic">
  	  	<ul>
  	  		<li>
  	  			<div>
  	  				<img src="../assets/img/studio1.jpg" />
  	  			</div>
  	  		</li>
  	  		<li>
  	  			<div>
  	  				<img src="../assets/img/studio2.jpg" />
  	  			</div>
  	  		</li>
  	  		<li>
  	  			<div>
  	  				<img src="../assets/img/studio4.jpg" />
  	  			</div>
  	  		</li>
  	  		<li>
  	  			<div>
  	  				<img src="../assets/img/studio5.jpg" />
  	  			</div>
  	  		</li>
  	  	</ul>
  	  </div>
  </section>
 
 </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all{
		height: 100%;
}
.first{
	  min-height: 720px;
	  min-width: 1280px;
	  height: 100%;
		position: relative;
		color: #fff;
		text-align: center;
		margin: 0;
		cursor: default;
}
.second{
	
		min-height: 720px;
	  min-width: 1280px;
		height: 100%;
	  position: relative;
		text-align: center;
		margin: 0;
		background: #3B3B3B;
}

.center{
  width: 305px;  
  height: 305px;  
  overflow: auto;  
  margin: auto;  
  position: absolute;  
  top: 0; left: 0; bottom: 0; right: 0;
	background: white;
	text-transform: uppercase;
	letter-spacing: 3px;
}
.box{
	width: 150px;
	height: 150px;
	float: left;
	position:relative; 
	border-radius: 15px;
	text-align:center;
	 line-height:150px;   
}
.part2{
	right: -5px;
	
}
.center img{
	height: 100px;
	width: 100px;
	border:2px solid white;
	border-radius: 50px;
	overflow: auto;  
  margin: auto;  
  position: absolute;  
  top: 0; left: 0; bottom: 5%; right: 0;
}
.part3{
	bottom: -5px;
}
.part4{
	right: -5px;
	bottom: -5px;
}

.lightcoral {
	background: #3B3B3B;
}
.logo{
	font-family: myLogoFont;
	
	color: white;
}
.p80{
	font-size: 80px;
}
.p40{
	font-size: 40px;
}
.seal{
	width: 100px;  
  height: 100px;  
  overflow: auto;  
  margin: auto;  
  position: absolute;  
  top: 430px; left: 260px; bottom: 0; right: 0;

}
.company{
	width: 100%;  
  height: 100px;  
  overflow: auto;  
  margin: auto;  
  position: absolute;  
  top: 450px; left: 0; bottom: 0; right: 0;
  text-align: center;
}
.company font{
	font-family: myLogoFont;
	font-size: 20px;
	color: #3B3B3B;
}
.seal img{
	  height: 50px;
	  width: 30px;
}
.desc{
	width: 40%;
	height: 40%;
	opacity:0.6;  
	background: black;
	position: absolute;
	top: 30%;
	text-align: left;
	overflow:hidden;
	
}
.desc p{
	color:white ;
	font-family: "微软雅黑";
	font-size: 20px;
	text-indent:2em; padding:0px; margin:0px;


}
.otherpic{
	
	width: 20%;
	height: 100%;
	min-height: 504px;
	min-width: 256px;
	background: white;
	float: right;
}
.otherpic ul {
	 width: 100%;
	 height: 100%;
	 float:left; 
	 list-style:none;
	 margin: 0;
	 padding: 0;
	
}
.otherpic ul li {
	 width: 100%;
	 height: 25%;
	 list-style-type:none;  
}
.otherpic ul li div {
	 width: 100%;
	 height: 100%;
	 border: 8px solid #3B3B3B;
}
.otherpic ul li div img{
	 width: 100%;
	 height: 100%;
	 
}
.firstpic{
	position:absolute;
	min-height: 540px;
	min-width: 896px;
	height:75%;
	width: 70%;
	background: white;
 	top: 12.5%;
}
.firstpic img{
	 height: 100%;
	 width: 100%;
	min-height: 504px;
	min-width: 896px;
}
</style>
