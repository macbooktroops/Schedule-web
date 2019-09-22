<template>
	<div class="design-box">
		<label class="design-box-label">
			<slot name="label"></slot>
		</label>
		<div
			class="design-box-content"
			:style="{
				'overflow-y': overflow
			}"
		>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style lang="scss">
.design-box {
	padding: 0 $design-box-padding;
	padding-bottom: 12px;
	background-color: $design-box-background-color;
	@include mobile(320px) {
		.design-box-label {
			display: block;
			padding: 8px 0;
			font-size: fontsize(14px);
			color: $design-font-deep-color;
		}
		.design-box-content {
			display: flex;
			font-size: fontsize(14px);
			padding-left: 14px;
			color: $design-font-light-color;
			justify-content: top;
			align-items: center;
		}
	}
}
</style>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ComponentBase from "@Components/Base";

@Component
export default class DesignBox extends ComponentBase {
	@Prop({
		type: String,
		default: undefined
	})
	protected title!: string;

	@Prop({
		type: String,
		default: "hidden"
	})
	protected overflow!: "hidden" | "auto";
}
</script>