import type { FieldErrors, Path, RegisterOptions, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface Feedback {
	feedback: string;
	img: string;
	authors: string[];
}
export interface LoginForm {
	email: string;
	password: string;
}
export interface SignupForm {
	fullName: string;
	email: string;
	password: string;
}
export interface Field<T extends FieldValues> {
	autoComplete: React.HTMLInputAutoCompleteAttribute;
	inputType: React.HTMLInputTypeAttribute;
	name: Path<T>;
	label: string;
	rules?: RegisterOptions<T, Path<T>>;
	errors: FieldErrors<T>;
	register: UseFormRegister<T>;
}

export interface Profile {
	firstName: string;
	lastName: string;
	bio?: string;
	profilePictureUrl?: string;
	dateOfBirth?: string;
	location?: string;
	gender?: string;
}
