import Vue from "vue";
import { Component } from "vue-property-decorator";


@Component
export default class ComponentBase extends Vue {
	/** 이미지리소스를 가져옵니다. */
	protected getImageResource(Filename: string, Extension: string) {
		return require(`@Resources/${Filename}.${Extension}`);
	}

	/** 시간정보를 포맷팅처리합니다. */
	protected FormatString(DateStr: string) {
		return new Date(
			DateStr.substring(
				0,
				DateStr.lastIndexOf("Z")
			)
		).FormatString("YYYY년 MM월 DD일 (E) A HH12시");
	}
}