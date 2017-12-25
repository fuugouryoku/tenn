<template>
	<div class="all">
		<section class="first">
			<div class="center">
				<div class="box part1 lightcoral">
					<font class="logo p80">天</font>
				</div>
				<div class="box part2 lightcoral"><img src="../assets/img/background.jpg" /></div>
				<div class="box part3 lightcoral">
					<font class="logo p40">古琴</font>
				</div>
				<div class="box part4 lightcoral">
					<font class="logo p80">趣</font>
				</div>
			</div>
			<div class="seal"><img src="../assets/img/seal.gif" /></div>
			<div class="company">
				<div>
					<font>天趣古琴工作室</font>
				</div>
				<div>
					<font>TIANQUGUQIN STUDIO</font>
				</div>
			</div>
		</section>
		<section class="second">
			<div class="firstpic">
				<img src="../assets/img/studio1.jpg" />
				<div class="desc">
					<p>
						本方案是围绕现代简约为主题，适合于30岁左右的三口之家居住，再加上中式的设计元素在里面。 相互结合，相交融。以简洁明快的设计风格为主调，简洁和实用是现代简约风格的基本特点。简约风 格已经大行其道几年了，仍然保持很猛的势头，这是因为人们装修时总希望在经济、实用、舒适的同 时，体现一定的文化品味。
					</p>
				</div>
			</div>
			<div class="otherpic">
				<ul>
					<li>
						<div class="smallpic">
							<img src="../assets/img/studio1.jpg" />
						</div>
					</li>
					<li>
						<div class="smallpic">
							<img src="../assets/img/studio2.jpg" />
						</div>
					</li>
					<li>
						<div class="smallpic">
							<img src="../assets/img/studio4.jpg" />
						</div>
					</li>
					<li>
						<div class="smallpic">
							<img src="../assets/img/studio5.jpg" />
						</div>
					</li>
				</ul>
			</div>
		</section>
		<section class="third">
			<div class="aboutme">
				<div class="page">
				<br />
				<p>　　去年夏天，我们和S君夫妇在松堂住了三日。难得这三日的闲，我们约好了什么事不管，只玩儿，也带了两本书，却只是预备闲得真没办法时消消遣的。</p>
				<p>　　出发的前夜，忽然雷雨大作。枕上颇为怅怅，难道天公这么不做美吗!第二天清早，一看却是个大晴天。上了车，一路树木带着宿雨，绿得发亮，地下只有一些水塘，没有一点尘土，行人也不多。又静，又干净。</p>
				<p>　　想着到还早呢，过了红山头不远，车却停下了。两扇大红门紧闭着，门额是国立清华大学西山牧场。拍了一会门，没人出来，我们正在没奈何，一个过路的孩子说这门上了锁，得走旁门。旁门上接着牌子，“内有恶犬”。小时候最怕狗，有点趑趄。门里有人出来，保护着进去，一面吆喝着汪汪的群犬，一面只是说，“不碍不碍”。</p>
				
				
				</div>
			</div>
			<div class="mypic">
				<img src="../assets/img/500266185.jpg" />
			</div>
		</section>
		<section class="fourth">
			
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
	.all {
		height: 100%;
	}
	
	.first {
		min-height: 720px;
		min-width: 1280px;
		height: 100%;
		position: relative;
		color: #fff;
		text-align: center;
		margin: 0;
		cursor: default;
	}
	
	.second {
		min-height: 720px;
		min-width: 1280px;
		height: 100%;
		position: relative;
		text-align: center;
		margin: 0;
		background: #3B3B3B;
	}
	
	.third {
		min-height: 720px;
		min-width: 1280px;
		height: 100%;
		position: relative;
		text-align: center;
		margin: 0;
		background: #FFFFFF;
	}
	.fourth{
		min-height: 720px;
		min-width: 1280px;
		height: 100%;
		position: relative;
		text-align: center;
		margin: 0;
		background: #FFFFFF;
	}
	.center {
		width: 305px;
		height: 305px;
		overflow: auto;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: white;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	
	.box {
		width: 150px;
		height: 150px;
		float: left;
		position: relative;
		border-radius: 15px;
		text-align: center;
		line-height: 150px;
	}
	
	.part2 {
		right: -5px;
	}
	
	.center img {
		height: 100px;
		width: 100px;
		border: 2px solid white;
		border-radius: 50px;
		overflow: auto;
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 5%;
		right: 0;
	}
	
	.part3 {
		bottom: -5px;
	}
	
	.part4 {
		right: -5px;
		bottom: -5px;
	}
	
	.lightcoral {
		background: #3B3B3B;
	}
	
	.logo {
		font-family: myLogoFont;
		color: white;
	}
	
	.p80 {
		font-size: 80px;
	}
	
	.p40 {
		font-size: 40px;
	}
	
	.seal {
		width: 100px;
		height: 100px;
		overflow: auto;
		margin: auto;
		position: absolute;
		top: 430px;
		left: 260px;
		bottom: 0;
		right: 0;
	}
	
	.company {
		width: 100%;
		height: 100px;
		overflow: auto;
		margin: auto;
		position: absolute;
		top: 450px;
		left: 0;
		bottom: 0;
		right: 0;
		text-align: center;
	}
	
	.company font {
		font-family: myLogoFont;
		font-size: 20px;
		color: #3B3B3B;
	}
	
	.seal img {
		height: 50px;
		width: 30px;
	}
	
	.desc {
		width: 40%;
		height: 40%;
		opacity: 0.6;
		background: black;
		position: absolute;
		top: 30%;
		text-align: left;
		overflow: hidden;
	}
	
	.desc p {
		color: white;
		font-family: "微软雅黑";
		font-size: 20px;
		text-indent: 2em;
		padding: 0px;
		margin: 0px;
	}
	
	.otherpic {
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
		float: left;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	
	.otherpic ul li {
		width: 100%;
		height: 25%;
		background: #3B3B3B;
		/*border: 4px solid #3B3B3B;*/
	}
	
	.smallpic {
		width: 100%;
		height: 100%;
	}
	
	.smallpic img {
		width: 100%;
		height: 95%;
	}
	
	.firstpic {
		position: absolute;
		min-height: 540px;
		min-width: 896px;
		height: 75%;
		width: 70%;
		background: white;
		top: 12.5%;
	}
	
	.firstpic img {
		height: 100%;
		width: 100%;
		min-height: 504px;
		min-width: 896px;
	}
	
	.aboutme {
		width: 60%;
		height: 100%;
		float: left;
		background: white;
		color: #3B3B3B;
	}
	.page{
		width: 50%;
		height: 100%;
		margin: 0 auto;
		text-align: left;

	}
	.mypic {
		width: 40%;
		height: 100%;
		float: left;
		background: white;
	}
	
	.mypic img {
		width: 100%;
		height: 100%;
	}
</style>