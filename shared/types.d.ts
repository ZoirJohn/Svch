import type { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface Feedback {
	feedback: string;
	img: string;
	authors: string[];
}
export interface EmailAndPasswordFormType {
	email: string;
	password: string;
	full_name?: string;
}
export interface AuthFormType {
	register: UseFormRegister<EmailAndPasswordFormType>;
	errors: FieldErrors<EmailAndPasswordFormType>;
	formTitle: string;
	type: "sig-in" | "sign-up";
	handleSubmit: UseFormHandleSubmit;
}
