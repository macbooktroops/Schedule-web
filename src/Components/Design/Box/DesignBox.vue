<template>
	<div class="design-box">
		<label class="design-box-label">
			<slot name="label"></slot>
		</label>
		<div class="design-box-content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<style lang="scss">
.design-box {
	@include mobile(320px) {
		.design-box-label {
			font-size: fontsize(14px);
			color: $design-font-deep-color;
		}
		.design-box-content {
			display: flex;
			font-size: fontsize(14px);
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
	@Prop({})
	protected title?: string;
}
</script>