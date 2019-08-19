<!-- 버튼 기본 스타일 -->
<!-- template 안에 들어가는 children 을 slot 위치에 넣는다. -->
<!-- Content 로 지정하거나 children을 작성하여 slot 을 채운다. -->
<template>
	<button
		type="button"
		class="design-button"
		:id="Id"
		:name="Name"
		v-bind:value="Value"
	>
		<slot>{{Content}}</slot>
	</button>
</template>

<style lang="scss" scoped>
.design-button {

}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class DesignButton extends Vue {
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

	/** input 태그의 `Content` 프로퍼티와 연동되는 값입니다. */
	@Prop({
		type: String,
		default: ""
	})
	protected Content?: string;
}
</script>
