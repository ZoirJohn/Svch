import { tables } from "entities/appwrite/client";
import type { Profile } from "shared/types";

export default async function updateProfile({ firstName, lastName, bio, dateOfBirth, gender, location, rowId }: Omit<Profile, "profilePictureUrl"> & { rowId: string }) {
	try {
		await tables.updateRow({
			databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
			tableId: "profiles",
			rowId,
			data: {
				firstName,
				lastName,
				bio,
				dateOfBirth,
				gender,
				location,
			},
		});
	} catch (error) {}
}