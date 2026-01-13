import { Client, Account, OAuthProvider, ID, type Models } from "appwrite";
import { createContext, useState } from "react";
import type { LoginForm, SignupForm } from "shared/types";

export const client = new Client();

client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const signUpWithGoogle = () =>
	account.createOAuth2Session({
		provider: OAuthProvider.Google,
		success: "http://localhost:5173/dashboard",
		failure: "http://localhost:5173/error",
	});

export const signUpWithEmailPassword = ({ email, password, fullName: name }: SignupForm) =>
	account.create({
		email,
		userId: ID.unique(),
		password,
		name,
	});

export const signInWithEmailPassword = ({ email, password }: LoginForm) =>
	account.createEmailPasswordSession({
		email,
		password,
	});

export const UserContext = createContext<{
	user: Models.User<Models.Preferences> | null;
	loading: boolean;
}>({ user: null, loading: true });

export const useUser = () => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	account
		.get()
		.then(setUser)
		.catch(() => setUser(null))
		.finally(() => setLoading(false));
	return { user, loading };
};
