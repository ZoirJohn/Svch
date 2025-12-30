import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import type { LoginForm } from "shared/types";
import { EMAIL_REGEX } from "shared/utils/validators";
import AuthOTPButton from "shared/ui/AuthOTPButton";
import FormField from "shared/ui/FormField";

const FIELDS = {
	email: {
		label: "Email",
		inputType: "email" as const,
		autoComplete: "email" as const,
		rules: {
			required: "Please enter an email",
			pattern: { value: EMAIL_REGEX, message: "example@email.com" },
		},
	},
	password: {
		label: "Password",
		inputType: "password" as const,
		autoComplete: "current-password" as const,
		rules: {
			required: "Please enter a password",
			minLength: { value: 7, message: "Length should be at least 7" },
		},
	},
} as const;

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
			<form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col items-center shadow [&>label]:mb-6 p-8 border border-blue-light rounded-lg [&>label]:w-full md:w-96 bg-white">
				<h1 className="mb-4 text-4xl!">Login</h1>
				{(Object.keys(FIELDS) as Array<keyof typeof FIELDS>).map((key) => {
					const field = FIELDS[key];
					return <FormField key={"login-" + key} name={key} label={field.label} inputType={field.inputType} autoComplete={field.autoComplete} register={register} rules={field.rules} errors={errors} />;
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
