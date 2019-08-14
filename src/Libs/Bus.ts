import Vue from "vue";

export default class Bus {
		private static InnerInstance?: Bus;
		private readonly BusInstance: Vue;

		private constructor() {
				this.BusInstance = new Vue();
		}

		/** Bus 인스턴스를 가져옵니다. */
		public static get Instance(): Bus {
				if(!Bus.InnerInstance)	Bus.InnerInstance = new Bus();
				return Bus.InnerInstance;
		}

		public emit(event: string, ...args: any[]): this {
				this.BusInstance.$emit(event, ...args);
				return this;
		}

		public on(event: string | string[], callback: (...args: any[]) => void): this {
				this.BusInstance.$on(event, callback);
				return this;
		}

		public once(event: string | string[], callback: (...args: any[]) => void): this {
				this.BusInstance.$once(event, callback);
				return this;
		}
				
		public off(event: string | string[], callback: (...args: any[]) => void): this {
				this.BusInstance.$off(event, callback);
				return this;
		}
}