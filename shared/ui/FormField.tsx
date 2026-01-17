import { memo, type ReactNode } from "react";
import { get, type FieldError, type FieldValues } from "react-hook-form";
import type { Field } from "shared/types";

function FormField<T extends FieldValues>({ name, autoComplete, inputType, label, register, errors, rules, value, inputClassName, labelClassName }: Field<T> & { value?: string; inputClassName?: string; labelClassName?: string }) {
	const error = get(errors, name) as FieldError | undefined;
	const field = register(name, rules);
	return (
		<label htmlFor={name} className={labelClassName}>
			{label}
			<input {...field} type={inputType} id={name} autoComplete={autoComplete} aria-describedby={`${name}Error`} aria-invalid={!!error} value={value} className={inputClassName || ""} />
			{error?.message && (
				<span className="input-error -bottom-6 left-0" id={`${name}Error`} role="alert">
					{error?.message}
				</span>
			)}
		</label>
	);
}

export default memo(FormField) as <T extends FieldValues>(props: Field<T> & { value?: string; inputClassName?: string; labelClassName?: string }) => ReactNode;
// 