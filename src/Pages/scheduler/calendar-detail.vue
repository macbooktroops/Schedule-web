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
					<span>{{StartDate}}부터</span>
					<span>{{EndDate}}까지</span>
				</div>
			</article>
			<article class="calendar-box">
				<DesignBox>
					<template v-slot:label>
						맴버<small>{{DetailInfo.arribal_member.length}}명</small>
					</template>
					<template v-slot:content>
						<div class="member-list">
							<template v-for="member in DetailInfo.arribal_member">
								<img :title="member" :key="member" />
							</template>
						</div>
					</template>
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
	background-color: $design-background-color;
	section.calendar-section {
		article.calendar-info {
				div:nth-child(1) {
				* {
					margin: 0;
				}
				
				h1 {
					font-size: fontsize(24px);
					font-weight: bold;
					color: $design-font-deep-color;
					line-height: 130%;
				}

				h3 {
					font-size: fontsize(18px);
					font-weight: $design-font-weight;
					color: $design-font-color;
				}
			}
			div + div {
				margin-top: 18px;
			}
			/* 시간 */
			div:nth-child(2) {
				* {
					display: block;
					font-size: fontsize(16px);
					color: $design-box-font-color;
				}
			}
		}
		article.calendar-box {
			background: $design-background-color;
			span {
				font-size: fontsize(18px);
				color: $design-box-font-color;
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

	private get StartDate() {
		return this.FormatString(this.DetailInfo.start_time as string);
	}

	private get EndDate() {
		return this.FormatString(this.DetailInfo.end_time as string);
	}

	private FormatString(DateStr: string): string {
		return new Date(DateStr.substring(0, DateStr.lastIndexOf("Z"))).FormatString("YYYY년 MM월 DD일 (E) A HH12시");
	}
}
</script>