
export interface IDoctor {
	address?: string;
	address_number?: string;
	avatar?: string;
	fullname?: string;
	id?: number;
	status?: boolean;
	title?: string;
	experience?: string;
}

export class Doctor implements IDoctor {
	constructor(
		public address?: string,
		public address_number?: string,
		public avatar?: string,
		public fullname?: string,
		public id?: number,
		public status?: boolean,
		public title?: string,
		public experience?:string
	) {
		this.address = address ? address : '';
		this.address_number = address_number ? address_number : '';
		this.avatar = avatar ? avatar : '';
		this.fullname = fullname ? fullname : '';
		this.id = id ? id : 0;
		this.status = status ? status : true;
		this.title = title ? title : '';
		this.experience = experience ? experience : 'N/A';
	}
}
