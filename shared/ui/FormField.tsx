import { get, type FieldError, type FieldErrors, type FieldValues, type Path, type RegisterOptions, type UseFormRegister, type UseFormRegisterReturn } from "react-hook-form";
import type { Field } from "shared/types";

export default function FormField<T extends FieldValues>({ name, autoComplete, inputType, label, register, errors, rules }: Field<T>) {
	const error = get(errors, name) as FieldError | undefined;
	const field = register(name, rules);
	return (
		<label htmlFor={name} className="bg-primary form-label relative">
			{label}
			<input {...field} type={inputType} id={name} autoComplete={autoComplete} aria-describedby={`${name}Error`} aria-invalid={!!error} />
			{error?.message && (
				<span className="input-error -bottom-6 left-0" id={`${name}Error`} role="alert">
					{error?.message}
				</span>
			)}
		</label>
	);
}
