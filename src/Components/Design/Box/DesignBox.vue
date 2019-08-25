<template>
	<div class="design-box">
		<h2>{{title}}<small>{{small}}</small></h2>
		<slot name="content"></slot>
	</div>
</template>

<style lang="scss">
.design-box {
	> h2 {
		font-size: 14px;
		color: $calendar-detail-block-color;
		> small {
			font-size: 12px;
  		color: $calendar-detail-color;
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
	@Prop({})
	protected small?: string;
}
</script>