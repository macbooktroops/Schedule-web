<template>
	<div class="page-calendar-detail">
		<DesignHeader title="상세보기" />
		<section class="calendar-section">
			<article class="calendar-info">
				<div>
					<h1>{{DetailInfo.title}}</h1>
					<h3>{{DetailInfo.subtitle}}</h3>
				</div>
				<div>
					<span>{{DetailInfo.start_time}}부터</span>
					<span>{{DetailInfo.end_time}}까지</span>
				</div>
			</article>
			<article class="calendar-box">
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
	background-color: $calendar-detail-background-color;
	section.calendar-section {
		article.calendar-info {
				div:nth-child(1) {
				* {
					margin: 0;
				}
				
				h1 {
					font-size: 24px;
					font-weight: bold;
					color: $calendar-detail-block-color;
					line-height: 130%;
				}

				h3 {
					font-size: 18px;
					font-weight: 500;
					color: $calendar-detail-color;
				}
			}
			div + div {
				margin-top: 18px;
			}
			/* 시간 */
			div:nth-child(2) {
				* {
					display: block;
					font-size: 16px;
					color: #5c4b69;
				}
			}
		}
		article.calendar-box {
			background: $calendar-detail-background-color;
			span {
				font-size: 18px;
				color: $calendar-box-color;
			}
		}
	}
}
</style>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ComponentBase from "@Components/Base";

import Data from "@/detail.json";

/** 스케줄러 상세정보 인터페이스 */
export interface ScheduleDetailInfo {
	id: number;
	title: string | null;
	subtitle: string | null;
	state: number;
	start_time: string | null;
	end_time: string | null;
	latitude: number;
	longitude: number;
	content: string | null;
	registrant: number;
	participants: number[];
	arribal_member: number[];
}

@Component({})
export default class PageCalendarDetail extends ComponentBase {
	private DetailInfo: ScheduleDetailInfo =  Data;
}
</script>