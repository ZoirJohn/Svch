import updateProfile from "entities/utils/updateProfile";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Profile } from "shared/types";
import FormField from "shared/ui/FormField";

export default function Form({ defaultValues, closeForm, rowId }: { defaultValues: Omit<Profile, "profilePictureUrl">; closeForm: () => void; rowId: string }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: defaultValues?.firstName,
			lastName: defaultValues?.lastName,
			bio: defaultValues.bio,
			dateOfBirth: defaultValues.dateOfBirth ? new Date(defaultValues.dateOfBirth).toISOString().split("T")[0] : undefined,
			location: defaultValues.location,
			gender: defaultValues.gender,
		},
	});
	const onSubmit: SubmitHandler<Omit<Profile, "profilePictureUrl">> = (formData) => {
		let hasChanges = false;
		for (const key in formData) {
			if (defaultValues[key as keyof typeof defaultValues] !== formData[key as keyof typeof formData]) {
				hasChanges = true;
				break;
			}
		}
		if (hasChanges) {
			updateProfile({ rowId, ...formData });
		}
		closeForm();
	};
	return (
		<form className="w-1/2 flex flex-col gap-8 p-4" onSubmit={handleSubmit(onSubmit)}>
			{(Object.keys(PROFILE_FIELDS) as Array<keyof typeof PROFILE_FIELDS>).map((key) => {
				const field = PROFILE_FIELDS[key];
				return <FormField autoComplete="name" errors={errors} inputType={field.inputType} label={field.label} name={key} register={register} key={key} />;
			})}
			<div className="flex flex-col">
				<label>Gender Selection</label>
				<select {...register("gender")}>
					<option value="Female">Female</option>
					<option value="Male">Male</option>
				</select>
			</div>
			<button type="submit">Send</button>
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
