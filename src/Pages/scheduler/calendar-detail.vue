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
				<DesignBox class="member-box" overflow="auto">
					<template v-slot:label>
						맴버<small>{{DetailInfo.arribal_member.length}}명</small>
					</template>
					<template v-slot:content>
						<div class="member-list">
							<div
								class="member-item"
								:key="member"
								v-for="member in DetailInfo.arribal_member"
							>
								<img :src="getImageResource(member, 'png')" :title="member"/>
								<span>{{member}}</span>
							</div>
						</div>
					</template>
				</DesignBox>
				<DesignBox class="memo-box">
					<template v-slot:label>
						메모
					</template>
					<template v-slot:content>
						{{DetailInfo.content}}
					</template>
				</DesignBox>
				<DesignBox class="map-box">
					<template v-slot:label>
					지도
					</template>
					<template v-slot:content>
						<div class="google-map" ref="GoogleMapRef"></div>
					</template>
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
			padding: 0 $design-box-padding;
			padding-bottom: $design-box-padding;
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
			div:nth-child(2) * {
					display: block;
					font-size: fontsize(16px);
					color: $design-box-font-color;
			}
		}
		article.calendar-box {
			background: $design-background-color;
			span {
				font-size: fontsize(18px);
				color: $design-box-font-color;
			}
			.design-box-label small{
				margin-left: 3px;
				font-size: fontsize($design-font-size);
				color: $design-font-color;
			}
			.member-box {
				.member-list {
					display: flex;
					flex-wrap: nowrap;
					flex: 1 auto;
					.member-item {
						padding-right: 8px;
						> img {
							width: 50px;
							height: 50px;
							border-radius: 50px;
						}
					}
				}
			}
			.map-box {
				.google-map {
					width: 100%;
					height: 300px;
				}
			}
		}
	}
}
</style>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ComponentBase from "@Components/Base";

import GoogleMap from "@Libs/Google/Map";

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

	private mounted() {
		const map = new GoogleMap(this.$refs.GoogleMapRef as HTMLDivElement, {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});
		console.log(map);
	}

	private get StartDate() {
		return this.FormatString(this.DetailInfo.start_time as string);
	}

	private get EndDate() {
		return this.FormatString(this.DetailInfo.end_time as string);
	}
}
</script>