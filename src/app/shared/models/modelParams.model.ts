export interface FormField {
  	defaultValue?: any;
	name: string;
	label?:string;
	fieldType:string;
	type?:string;
	required?: boolean;
	datatype?:string;
	min?:number;
	max?:number;
}