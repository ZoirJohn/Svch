import { Form, useForm, type SubmitHandler } from "react-hook-form";
import type { EmailAndPasswordFormType } from "shared/types";

export default function SignUp() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<EmailAndPasswordFormType>();
	const onSubmit: SubmitHandler<EmailAndPasswordFormType> = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="full_name">Full name:</label>
				<input
					{...register("full_name", { required: true, pattern: /^[a-zA-Z]+ [a-zA-Z]+$/ })}
					type="text"
					id="full_name"
				/>
				{errors.full_name && <span>Full name should be: Firstname Lastname</span>}
			</div>

			<input
				{...register("email", { required: true })}
				type="email"
			/>

			<button type="submit">Sign Up</button>
		</form>
	);
}
