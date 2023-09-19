
export interface IUser {
	id?: string;
	phone_number?: string;
	email?: string;
	full_name?: string;
	ref_code?: string;
	sponsor_id?: string;
	last_login?: string;
	password?: string;
	status?: number;
	created_at?: string;
	updated_at?: string;
}

export class User implements IUser {
	constructor(
		public id?: string,
		public phone_number?: string,
		public email?: string,
		public full_name?: string,
		public ref_code?: string,
		public sponsor_id?: string,
		public last_login?: string,
		public password?: string,
		public status?: number,
		public created_at?: string,
		public updated_at?: string
	) {
		this.id = id ? id : '';
		this.phone_number = phone_number ? phone_number : '';
		this.email = email ? email : '';
		this.full_name = full_name ? full_name : '';
		this.ref_code = ref_code ? ref_code : '';
		this.sponsor_id = sponsor_id ? sponsor_id : '';
		this.last_login = last_login ? last_login : '';
		this.password = password ? password : '';
		this.status = status ? status : 0;
		this.created_at = created_at ? created_at : '';
		this.updated_at = updated_at ? updated_at : '';

	}
}
