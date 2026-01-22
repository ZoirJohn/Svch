import { AppwriteException, ID, type Models } from "appwrite";
import { account, tables } from "entities/appwrite/client";
import { useCallback, useEffect, useState } from "react";

export const useUser = () => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const checkUser = useCallback(async () => {
		setLoading(true);

		// Try to verify whether the user has an account
		try {
			const currentUser = await account.get();
			if (currentUser.emailVerification) {
				// Try to create a profile for the user if the user is verified
				try {
					const [firstName, lastName] = currentUser.name.split(" ");
					await tables.createRow({
						databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
						tableId: "profiles",
						rowId: currentUser.$id,
						data: {
							firstName,
							lastName,
						},
					});
				} catch (error) {
					if (error instanceof AppwriteException && error.code !== 409) {
						console.error("Failed to create profile:", error);
					}
				}
			}
			setUser(currentUser);
		} catch (error) {
			if (error instanceof AppwriteException) {
				if (error.code == 401) {
					setUser(null);
				} else {
					console.log(error.message);
					setUser(null);
				}
			}
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		checkUser();
	}, [checkUser]);

	return { user, loading, checkUser };
};
