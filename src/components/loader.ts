import Vue, { VueConstructor } from "vue";
import DesignButton from "@Components/Design/Button/DesignButton.vue";
import DesignInput from "@Components/Design/Input/DesignInput.vue";

export const LoadComponents = (vue: VueConstructor<Vue>) => {
	vue.component("DesignInput", DesignInput);
	vue.component("DesignButton", DesignButton);
};