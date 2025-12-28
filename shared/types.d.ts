import type { FieldErrors, RegisterOptions, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface Feedback {
	feedback: string;
	img: string;
	authors: string[];
}
export interface LoginForm {
	fullName: string;
	email: string;
	password: string;
}
export interface SignupForm {
	fullName: string;
	email: string;
	password: string;
}
export interface Field<T> {
	autoComplete: string;
	inputType: string;
	name: keyof T;
	labelText: string;
	validation: RegisterOptions<T>;
}
