import { useForm, type SubmitHandler } from "react-hook-form";
import type { EmailAndPasswordFormType } from "shared/types";
import AuthForm from "widgets/AuthForm";

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EmailAndPasswordFormType>();
	const onSubmit: SubmitHandler<EmailAndPasswordFormType> = (data) => console.log(data);
	return (
		<main className="flex justify-center items-center shrink-0 grow">
			<AuthForm
				errors={errors}
				formTitle="Sign up"
				handleSubmit={handleSubmit}
				register={register}
				type="sign-up"
			/>
		</main>
	);
}
