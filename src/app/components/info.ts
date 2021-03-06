export class Info {
	constructor(
		public type: String,
		public name: String,
		public phone: String,
		public location: Location,
		public available: Number,
		public time: String,
		public admin:String
		){}
}

export class Location {
	constructor(
		public lat: Number,
		public lng: Number
		) {}
}
