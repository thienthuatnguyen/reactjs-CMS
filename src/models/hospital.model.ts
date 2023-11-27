
export interface IHospital {
	address?: string;
	avatar?: string;
	id?: number;
	status?: boolean;
	title?: string;
}

export class Hospital implements IHospital {
	constructor(
		public address?: string,
		public avatar?: string,
		public id?: number,
		public status?: boolean,
		public title?: string
	) {
		this.address = address ? address : '';
		this.avatar = avatar ? avatar : '';
		this.id = id ? id : 0;
		this.status = status ? status : true;
		this.title = title ? title : '';
	}
}



export interface IFee {
	hospital_id: number;
	doctor_id: number;
}

export interface IBooking {
	hospital_id?: number;
	doctor_id?: number;
	profile_id: number;
	department_id?: number;
	date_book: string;
	time_book: string;
}