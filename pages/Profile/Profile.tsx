import { UserContext } from "entities/contexts/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import FormField from "shared/ui/FormField";

export default function Profile() {
	const { user } = useContext(UserContext);
	const { register } = useForm();
	return (
		<section className="border w-full flex justify-center items-center">
			<form action="flex basis-1/2">
				<FormField autoComplete="bday-day" errors={{}} inputType="date" label="Your birthday" name="date" register={register} value="2000-01-01" inputClassName="outline-none! p-0!" labelClassName=""></FormField>
			</form>
		</section>
	);
}
