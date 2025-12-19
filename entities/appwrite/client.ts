import { Client, Account, OAuthProvider, ID } from "appwrite";
import type { EmailAndPasswordFormType } from "shared/types";

export const client = new Client();

client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const signUpWithGoogle = () =>
	account.createOAuth2Session({
		provider: OAuthProvider.Google,
		success: "http://localhost:5173/dashboard",
		failure: "http://localhost:5173/error",
	});

export const signUpWithEmailPassword = ({ email, password, full_name: name }: EmailAndPasswordFormType) =>
	account.create({
		email,
		userId: ID.unique(),
		password,
		name,
	});

export const signInWithEmailPassword = ({ email, password }: EmailAndPasswordFormType) =>
	account.createEmailPasswordSession({
		email,
		password,
	});
// export const getSession = await account.getSession({
// 	sessionId: "current",
// });
// console.log(getSession);
