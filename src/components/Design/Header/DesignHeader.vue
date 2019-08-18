<template>
	<header>
			<label for="title">
				<slot>{{title}}</slot>
			</label>
	</header>
</template>


<style lang="scss" scoped>
header {
	width: 100%;
	height: 56px;

	label[for="title"] {
		font-size: 20px;
		color: #7165cd;
	}
}
</style>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component
export default class DesignHeader extends Vue {

	/** DesignHeader 의 `title` 프로퍼티에 대한 값입니다. */
	@Prop({
		type: String,
		default: undefined
	})
	protected title?: string;
}
</script>

