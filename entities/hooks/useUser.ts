import { AppwriteException, type Models } from "appwrite";
import { account } from "entities/appwrite/client";
import { useCallback, useEffect, useState } from "react";

export const useUser = () => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const checkUser = useCallback(async () => {
		setLoading(true);
		try {
			const currentUser = await account.get();
			setUser(currentUser);
		} catch (error) {
			if (error instanceof AppwriteException) {
				if (error.code === 401) {
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
