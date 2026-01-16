import { account } from "entities/appwrite/client";

export async function signOut() {
	try {
		await account.deleteSession("current");
	} catch (error) {
		console.error("Logout failed", error);
	}
}
