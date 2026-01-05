import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import type { Field, SignupForm } from "shared/types";
import { EMAIL_REGEX, FULL_NAME_REGEX } from "shared/utils/validators";
import AuthOTPButton from "widgets/AuthOTPButton";
import FormField from "shared/ui/FormField";

const FIELDS = {
	fullName: {
		label: "Full name",
		inputType: "text" as const,
		autoComplete: "name" as const,
		rules: {
			required: "Please enter a full name",
			pattern: { value: FULL_NAME_REGEX, message: "Firstname Lastname" },
		},
	},
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
		autoComplete: "new-password" as const,
		rules: {
			required: "Please enter a password",
			minLength: { value: 7, message: "Length should be at least 7" },
		},
	},
} as const;

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupForm>();
	const onSubmit: SubmitHandler<SignupForm> = (data) => console.log(data);

	return (
		<main className="main justify-center items-center">
			<form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col items-center shadow [&>label]:mb-6 p-8 border border-blue-light rounded-lg [&>label]:w-full md:w-96 bg-white">
				<h1 className="mb-4 text-4xl!">Sign up</h1>
				{(Object.keys(FIELDS) as Array<keyof typeof FIELDS>).map((key) => {
					const { autoComplete, inputType, label, rules } = FIELDS[key];
					return <FormField autoComplete={autoComplete} errors={errors} inputType={inputType} label={label} register={register} name={key} key={"signup-" + key} rules={rules} />;
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
