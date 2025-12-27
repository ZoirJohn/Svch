import { useForm, type SubmitHandler } from "react-hook-form";
import type { Field, LoginForm } from "shared/types";
import AuthOTPButton from "widgets/AuthOTPButton";

const FIELDS: Field<LoginForm>[] = [{ autoComplete: "name", inputType: "text", htmlFor: "fullName", labelText: "Full name", validation: { required: true, pattern: /^[A-Z][a-z]+ [A-Z][a-z]+$/ } }];

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginForm>();
	const onSubmit: SubmitHandler<LoginForm> = (data) => {
		console.log(data);
	};
	return (
		<main className="flex justify-center items-center shrink-0 grow">
			<form onSubmit={handleSubmit(onSubmit)} className="[&>div]:relative flex flex-col items-center shadow [&>div]:mb-6 p-8 border border-blue-light rounded-lg [&>div]:w-full md:w-96">
				<h1 className="mb-4 text-4xl!">Login</h1>
				{FIELDS.map(({ autoComplete, inputType, htmlFor, labelText, validation }) => {
					return (
						<div>
							<label htmlFor={htmlFor} className="bg-primary form-label">
								{labelText}
							</label>
							<input {...register(htmlFor, { ...validation })} type={inputType} id={htmlFor} autoComplete={autoComplete} />
							{errors.fullName && <span className="input-error">Firstname Lastname</span>}
						</div>
					);
				})}

				<button type="submit" className="mb-8 ml-auto px-4 py-2 rounded-lg button-primary">
					Login
				</button>
				<span className="block bg-blue-light mb-8 w-full h-px"></span>
				<AuthOTPButton />
			</form>
		</main>
	);
}
