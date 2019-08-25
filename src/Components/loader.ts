import Vue, { VueConstructor } from "vue";

import DesignHeader from "@Components/Design/Header/DesignHeader.vue";
import DesignBox from "@Components/Design/Box/DesignBox.vue";


export const LoadComponents = (vue: VueConstructor<Vue>) => {
	vue.component("DesignHeader", DesignHeader);
	vue.component("DesignBox", DesignBox);
};