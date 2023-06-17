export interface FormField {
  	defaultValue?: any;
	name: string;
	fieldType:string;
	required: boolean;
	datatype?:string;
	min?:number;
	max?:number;
}