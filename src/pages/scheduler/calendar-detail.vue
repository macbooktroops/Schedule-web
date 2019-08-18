<template>
	<div class="page-calendar-detail">
		<DesignHeader title="상세보기" />
		<section>
			<article>
				<div>
					<h1>{{title}}</h1>
				</div>
				<div>
					<span>{{start_time}}</span>
					<span></span>
				</div>
			</article>
			<article>
				<DesignBox title="멤버" small="5명">	
				</DesignBox>
				<DesignBox title="메모">
				</DesignBox>
				<DesignBox title="지도">	
				</DesignBox>
			</article>
		</section>
	</div>
</template>

<style lang="scss">
.page-calendar-detail {
	width: 100%;
	height: 100%;
	background: #F9F9F9;
	> section {
		> article:nth-child(1) {
			height: 30%;
			> div:nth-child(1) {
				> h1 {
					font-size: 24px;
					font-weight: bold;
					color: #000000;
				}
			}
		}
		> article:nth-child(2) {
			background: #FFFFFF;
			> span {
				font-size: 14px;
				color: #5c4b69;
			}
		}
	}
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class PageCalendarDetail extends Vue {
	@Prop({
		type: String,
		default: "테스트타이틀"
	})
	protected title!: string;

	/** 시작시간 */
	@Prop({
		type: String,
		default: "2019-06-22T17:30:00Z"
	})
	protected start_time?: string;
}

/*
"id": Int,
"title": String,
"state": Int,
"start_time": String(DateTime, format YYYY-MM-DDTHH:MM:SSZ), ex) "2019-06-22T17:30:00Z"
"latitude": Float,
"longitude": Float,
"content": String,
"registrant": Int,
"participants": [
	Int # participant user_id
],
"arrival_member": [
	Int # participant user_id
]
 */
</script>