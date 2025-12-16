import { Client, Account, OAuthProvider } from "appwrite";

export const client = new Client();

client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);

export const signUp = () =>
	account.createOAuth2Session({
		provider: OAuthProvider.Google,
		success: "http://localhost:5173/dashboard",
		failure: "http://localhost:5173/error",
	});
