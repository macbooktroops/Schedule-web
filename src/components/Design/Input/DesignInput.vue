<!-- 입력창 기본 스타일 -->
<template>
	<div class="design-input">
		<input type="text"
			:id="Id"
			:name="Name"
			v-bind:value="Value"
		/>
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
	/** input 태그의 `Id` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected Id?: string;

	/** input 태그의 `Name` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected Name?: string;


	/** input 태그의 `Value` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected Value?: string;
}
</script>
