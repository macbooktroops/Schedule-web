<template>
	<header class="design-header">
			<label for="title">
				<slot>{{title}}</slot>
			</label>
	</header>
</template>


<style lang="scss" scoped>
.design-header {
	width: 100%;
	height: 56px;

	label[for="title"] {
		font-size: 20px;
		color: #7165cd;
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

