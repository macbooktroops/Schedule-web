<template>
	<div class="page-calendar-detail">
	</div>
</template>

<style lang="scss" scoped>
.page-calendar-detail {

}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getSchedulerDetail } from "@/Store/Actions/ScheduleAction";

export default class PageCalendarDetail extends Vue {

}

getSchedulerDetail("test");
/*
"id": Int,
"title": String,
"state": Int,
"start_time": String(DateTime, format YYYY-MM-DDTHH:MM:SSZ), ex) "2019-06-22T17:30:00Z"
"latitude": Float,
"longitude": Float,
"content": String,
"registrant": Int,
"participants": [
	Int # participant user_id
],
"arrival_member": [
	Int # participant user_id
]
 */
</script>