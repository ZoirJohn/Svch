import { account } from "entities/appwrite/client";

export async function signOut() {
	try {
		await account.deleteSession("current");
		return { success: true };
	} catch (error) {
		console.error("Logout failed", error);
		return { success: false };
	}
}
