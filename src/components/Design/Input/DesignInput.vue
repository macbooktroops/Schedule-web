<!-- 입력창 기본 스타일 -->
<template>
	<div class="design-input">
		<label :for="id">{{label}}</label>
		<input type="text" :id="id" :name="name" v-bind:value="value" />
	</div>
</template>

<style lang="scss">
.design-input {

}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class DesignInput extends Vue {
	/** input 태그의 `id` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected id?: string;

	/** input 태그의 `name` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected name?: string;


	/** input 태그의 `value` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected value?: string;

	/** label 태그의 `label` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: ""
	})
	protected label?: string;
}
</script>
