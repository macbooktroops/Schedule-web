export default class GoogleMap {
	private Map!: google.maps.Map;
	constructor(ref: HTMLElement, options: google.maps.MapOptions) {
		this.Map = new google.maps.Map(ref, options);
	}
}