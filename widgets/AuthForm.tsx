import AuthLink from "./AuthLink";
import type { AuthFormType } from "shared/types";

export default function AuthForm({ handleSubmit, register, errors, formTitle, type, onSubmit }: AuthFormType) {
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="[&>div]:relative flex flex-col items-center shadow [&>div]:mb-6 p-8 border border-blue-light rounded-lg [&>div]:w-full md:w-96"
		>
			<h1 className="mb-4 text-4xl!">{formTitle}</h1>
			<div>
				<label
					htmlFor="full_name"
					className="bg-primary form-label"
				>
					Full name
				</label>
				<input
					{...register("full_name", { required: true, pattern: /^[A-Z][a-z]+ [A-Z][a-z]+$/ })}
					type="text"
					id="full_name"
					autoComplete="name"
				/>
				{errors.full_name && <span className="input-error">Firstname Lastname</span>}
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					{...register("email", { required: true })}
					type="email"
					id="email"
					autoComplete="email"
				/>
				{errors.email && <span className="input-error">example@mail.com</span>}
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					{...register("password", { required: true })}
					type="password"
					id="password"
					autoComplete="password"
				/>
			</div>

			<button
				type="submit"
				className="mb-8 ml-auto px-4 py-2 rounded-lg button-primary"
			>
				{type == "sign-up" ? "Sign Up" : "Login"}
			</button>
			<span className="block bg-blue-light mb-8 w-full h-px"></span>
			<button
				type="button"
				className="flex justify-center items-center gap-2 bg-blue-light py-1 rounded-xl w-full"
			>
				Continue with Google
				<svg
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					width="32"
					height="32"
					viewBox="0 0 48 48"
				>
					<path
						fill="#FFC107"
						d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
					<path
						fill="#FF3D00"
						d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
					></path>
					<path
						fill="#4CAF50"
						d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
					></path>
					<path
						fill="#1976D2"
						d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
				</svg>
			</button>
			<AuthLink
				link={`/auth/${type == "sign-in" ? "sign-up" : "sign-in"}`}
				linkText={`${type == "sign-in" ? "Don't have an account? Sign up" : "Already have an account? Login"}`}
			/>
		</form>
	);
}
