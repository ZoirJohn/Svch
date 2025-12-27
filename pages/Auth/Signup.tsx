import { useForm, type SubmitHandler } from "react-hook-form";
import type { SignupForm } from "shared/types";

export default function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupForm>();
	const onSubmit: SubmitHandler<SignupForm> = (data) => console.log(data);
	return (
		<main className="flex justify-center items-center shrink-0 grow">
			
		</main>
	);
}
