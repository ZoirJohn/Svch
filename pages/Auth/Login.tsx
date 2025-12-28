import { useForm, type SubmitHandler } from "react-hook-form";
import type { Field, LoginForm } from "shared/types";
import AuthOTPButton from "widgets/AuthOTPButton";

const FIELDS: Field<LoginForm>[] = [
	{
		autoComplete: "email",
		inputType: "email",
		htmlFor: "email",
		labelText: "Email",
		validation: {
			required: true,
			pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		},
	},
	{ autoComplete: "password", inputType: "password", labelText: "Password", htmlFor: "password", validation: { required: true } },
];

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
			<form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col items-center shadow [&>label]:mb-6 p-8 border border-blue-light rounded-lg [&>label]:w-full md:w-96">
				<h1 className="mb-4 text-4xl!">Login</h1>
				{FIELDS.map(({ autoComplete, inputType, htmlFor, labelText, validation }) => {
					return (
						<label htmlFor={htmlFor} className="bg-primary form-label">
							{labelText}
							<input {...register(htmlFor, validation)} type={inputType} id={htmlFor} autoComplete={autoComplete} />
						</label>
					);
				})}
				{(errors.email || errors.password) && <span className="input-error bottom-1/2 translate-y-9.5 text-center">Incorrect email or password</span>}

				<button type="submit" className="mb-8 ml-auto px-4 py-2 rounded-lg button-primary">
					Login
				</button>
				<span className="block bg-blue-light mb-8 w-full h-px"></span>
				<AuthOTPButton />
			</form>
		</main>
	);
}
