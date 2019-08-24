import Vue, { VueConstructor } from "vue";
import DesignButton from "@Components/Design/Button/DesignButton.vue";
import DesignInput from "@Components/Design/Input/DesignInput.vue";
import DesignCheckBox from "@Components/Design/Input/DesignCheckBox.vue";
import DesignHeader from "@Components/Design/Header/DesignHeader.vue";
import DesignBox from "@Components/Design/Box/DesignBox.vue";


export const LoadComponents = (vue: VueConstructor<Vue>) => {
	vue.component("DesignInput", DesignInput);
	vue.component("DesignCheckBox", DesignCheckBox);
	vue.component("DesignButton", DesignButton);
	vue.component("DesignHeader", DesignHeader);
	vue.component("DesignBox", DesignBox);
};