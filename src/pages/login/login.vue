<template>
	<div class="page-login">
		<DesignInput id="email" name="email" label="이메일" value="" />
		<DesignInput id="password" name="password" label="패스워드" value="" />
		<DesignButton>로그인</DesignButton>
	</div>
</template>

<style lang="scss">
.page-login {	}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class PageLogin extends Vue {

}
</script>