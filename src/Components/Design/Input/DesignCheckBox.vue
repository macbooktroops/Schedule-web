<template>
	<div class="design-checkbox">
		<label :for="id">
			<input type="checkbox" :id="id" :name="name" v-bind:value="value" />
			<span></span>
		</label>
		<span>
			<slot>
				{{content}}
			</slot>
		</span>
	</div>
</template>

<style lang="scss" scoped>
.design-checkbox {
	display: block;
	> * {
		display: inline-block;
		vertical-align: top;
	}
	> label {
		position: relative;
		> input {
			position: absolute;
			top: 0;
			left: 0;
			width: 16px;
			margin: 16px 0 0;
			height: 0;
		}
		> span {
			display: block;
			width: 16px;
			height: 16px;
			border: 1px solid #000000;
			background: transparent;
		}
		> input:checked + span::after {
				content: ' ';
				position: absolute;
				top: 2px;
				left: 3px;
				width: 10px;
				height: 8px;
				border: 0;
				border-bottom: 3px solid #000000;
				border-left: 3px solid #000000;
				transform: rotate(-45deg);
		}
	}
	> span {
		padding-left: 12px;
	}
}
</style>

<script lang="ts">
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ComponentBase from "@Components/Base";

@Component
export default class DesignCheckBox extends ComponentBase {
	@Prop({
		type: String,
		default: undefined
	})
	protected id?: string;

	@Prop({
		type: String,
		default: undefined
	})
	protected name?: string;

	@Prop({
		type: String,
		default: undefined
	})
	protected value?: string;

	@Prop({
		type: String,
		default: undefined
	})
	protected content?: string;
}
</script>