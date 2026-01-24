import { useForm } from "react-hook-form";
import FormField from "shared/ui/FormField";

export default function Form({
	defaultValues,
}: {
	defaultValues?: {
		firstName: string;
		lastName: string;
		bio: string;
	};
}) {
	const {
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			bio: "",
			dateOfBirth: "",
			location: "",
			gender: "",
		},
	});
	return (
		<form className="w-1/2 flex flex-col gap-8 p-4">
			{(Object.keys(PROFILE_FIELDS) as Array<keyof typeof PROFILE_FIELDS>).map((key) => {
				const field = PROFILE_FIELDS[key];
				return <FormField autoComplete="name" errors={errors} inputType={field.inputType} label={field.label} name={key} register={register} key={key}  />;
			})}
			<div className="flex flex-col">
				<label htmlFor="male" className="flex items-center gap-2">
					<input type="radio" className="outline-none! size-5!" name="gender" id="male" />
					<span>Male</span>
				</label>

				<label htmlFor="female" className="flex items-center gap-2">
					<input type="radio" className="outline-none! size-5!" name="gender" id="female" />
					<span>Female</span>
				</label>
			</div>
		</form>
	);
}
const PROFILE_FIELDS = {
	firstName: {
		label: "First name",
		inputType: "text" as const,
		autoComplete: "given-name" as const,
		rules: {
			required: "Please enter a first name",
		},
	},
	lastName: {
		label: "Last name",
		inputType: "text" as const,
		autoComplete: "family-name" as const,
		rules: {
			required: "Please enter a last name",
		},
	},
	bio: {
		label: "Bio",
		inputType: "text" as const,
		autoComplete: "",
	},
	dateOfBirth: {
		label: "Birth year",
		inputType: "date" as const,
		autoComplete: "b-day",
	},
	location: {
		label: "Location",
		inputType: "text",
		autoComplete: "location",
	},
};
