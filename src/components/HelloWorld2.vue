<template>
	<div class="all">
		<section class="first">
			<transition name="fold">
				<div class="center">
					<img src="../assets/img/background.jpg" />
				</div>
				<div class="company">
  	 <div><font>天趣古琴工作室</font></div>
  	 <div><font>TIANQUGUQIN STUDIO</font></div>
  	 </div>
			</transition>
		</section>

	</div>
</template>

<script>
	export default {
		name: 'HelloWorld2'
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
	
	.center {
		width: 355px;
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
	
	.center img {
		width: 350px;
		height: 300px;
		-webkit-filter: blur(0.5px);
		/* Chrome, Opera */
		-moz-filter: blur(0.5px);
		-ms-filter: blur(0.5px);
		filter: blur(0.5px);
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
	.fold-enter-active,
	.fold-leave-active {
		transition: all 10.5s;
	}
	
	.fold-enter,
	.fold-leave-active {
		transform: translate3d(0, 0, 0);
	}
</style>