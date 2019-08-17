<template>
	<div class="page-join">
		<DesignInput id="email" name="email" label="이메일" value="" />
		<DesignInput id="username" name="username" label="유저이름" value="" />
		<DesignInput id="nickname" name="nickname" label="닉네임" value="" />
		<DesignInput id="password" name="password" label="패스워드" value="" />
		<DesignInput id="password2" name="password2" label="패스워드확인" value="" />
		<DesignCheckBox id="yaggwan" name="yaggwan" content="약관동의" />
		<DesignButton>등록</DesignButton>
	</div>
</template>

<style lang="scss">
.page-join {	}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class PageJoin extends Vue {

}
</script>