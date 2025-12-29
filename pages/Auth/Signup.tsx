import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import type { Field, SignupForm } from "shared/types";
import AuthOTPButton from "shared/ui/AuthOTPButton";

const FIELDS: Field<SignupForm>[] = [
	{ autoComplete: "name", inputType: "text", name: "fullName", label: "Full name", validation: { required: "Full name is required" } },
	{ autoComplete: "email", inputType: "email", name: "email", label: "Email", validation: { required: "Email is required" } },
	{ autoComplete: "new-password", inputType: "password", name: "password", label: "Password", validation: { required: "Password is required" } },
];

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupForm>();
	const onSubmit: SubmitHandler<SignupForm> = (data) => console.log(data);
	return (
		<main className="flex justify-center items-center shrink-0 grow">
			<form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col items-center shadow [&>label]:mb-6 p-8 border border-blue-light rounded-lg [&>label]:w-full md:w-96">
				<h1 className="mb-4 text-4xl!">Sign up</h1>
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
					Sign up
				</button>
				<span className="block bg-blue-light mb-8 w-full h-px"></span>
				<AuthOTPButton />
				<Link to="/auth/sign-in" className="text-blue-600 hover:underline mt-2">
					Already have an account? Sign in
				</Link>
			</form>
		</main>
	);
}
