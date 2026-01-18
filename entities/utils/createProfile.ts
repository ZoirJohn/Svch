import { AppwriteException } from "appwrite";
import { account, tables } from "entities/appwrite/client";

async function createProfile() {
	try {
		const user = await account.get();
		if (user.emailVerification) {
			try {
				await tables.getRow({ databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID, rowId: user.$id, tableId: "profiles" });
			} catch (error) {
				if (error instanceof AppwriteException && error.code == 404) {
					await tables.createRow(import.meta.env.VITE_APPWRITE_DATABASE_ID, "profiles", user.$id, {
						$id: user.$id,
						firstName: user.name.split(" ")[0],
						lastName: user.name.split(" ")[1],
						bio: "",
					});
					console.log("New profile row created for verified user!");
				}
			}
		} else {
			console.log("User not verified yet. Prompt them to check email.");
		}
	} catch (err) {
		console.error("Not logged in", err);
	}
}
