import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import type { Field, LoginForm } from "shared/types";
import { EMAIL_REGEX } from "shared/utils/validators";
import AuthOTPButton from "widgets/AuthOTPButton";

const FIELDS: Field<LoginForm>[] = [
	{
		autoComplete: "email",
		inputType: "email",
		name: "email",
		label: "Email",
		validation: {
			required: "Please enter an email",
			pattern: { value: EMAIL_REGEX, message: "example@email.com" },
		},
	},
	{ autoComplete: "current-password", inputType: "password", label: "Password", name: "password", validation: { required: "Please enter a password", minLength: 7 } },
];

export default function Login() {
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
				{FIELDS.map(({ autoComplete, inputType, name, label, validation }) => {
					return (
						<label htmlFor={name} className="bg-primary form-label relative" key={name}>
							{label}
							<input {...register(name, validation)} type={inputType} id={name} autoComplete={autoComplete} aria-describedby={`${name}Error`} aria-invalid={`${!!errors[name]}`} />
							{errors[name] && (
								<span className="input-error -bottom-6 left-0" id={`${name}Error`} role="alert">
									{errors[name].message}
								</span>
							)}
						</label>
					);
				})}
				<button type="submit" className="mb-8 ml-auto px-4 py-2 rounded-lg button-primary">
					Login
				</button>
				<span className="block bg-blue-light mb-8 w-full h-px"></span>
				<AuthOTPButton />
				<Link to="/auth/sign-up" className="text-blue-600 hover:underline mt-2">
					Don't have an account? Sign up
				</Link>
			</form>
		</main>
	);
}
