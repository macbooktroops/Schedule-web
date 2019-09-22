<template>
	<header class="design-header">
		<label for="title" class="design-header-label">
			<slot name="title">{{title}}</slot>
		</label>
	</header>
</template>


<style lang="scss">
.design-header {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 56px;
	padding-left: $design-box-padding;
	.design-header-label {
		font-size: fontsize(20px);
		color: $design-font-color;
	}
}
</style>
<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ComponentBase from "@Components/Base";

@Component
export default class DesignHeader extends ComponentBase {

	/** DesignHeader 의 `title` 프로퍼티에 대한 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected title?: string;
}
</script>

