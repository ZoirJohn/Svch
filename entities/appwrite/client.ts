import { Client, Account, OAuthProvider, ID, type Models, Databases, TablesDB } from "appwrite";
import type { LoginForm, SignupForm } from "shared/types";

export const client = new Client();

client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const tables = new TablesDB(client);
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
