<template>
	<div class="container">
		<div class="tit_bg">
			<h1 style="font-family:xiaowei; font-size:30px; color: #a50dfe;text-shadow: 0 0 1px currentColor,1px 1px 1px #000,2px 2px 3px #000;"><i
					class="icon icon-zap"></i> 封面回顾</h1>
		</div>
		<div class="row at-row" v-for="n in 5" :key="n">
			<div class="banner-info-date" style="line-height: 1.8;padding: 13px 0;">1.24</div>
			<div class="col-md-6" v-for="k in 8" :key="k">
				<at-card :body-style="{ padding: 0 }">
					<div>
						<img style="width: 100%;height: auto;transition: all 0.6s ease;"
							src="http://img2.mukewang.com/szimg/5fc5ab8d099b1bee05400304.png">
						<div style="padding: 14px;">
							<p>AT-UI</p>
						</div>
					</div>
				</at-card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CoverArticle",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.banner-info-date {
		opacity: .85;
		font-family: Georgia;
		font-size: 22px;
		color: #2e3033;
		width: 100%;
	}

	.at-card__body {
		padding: 0px !important;
	}

	.col-md-6 {
		margin: 5px 0;
	}

	.tit_bg {
		margin-top: 80px;
	}
</style>
