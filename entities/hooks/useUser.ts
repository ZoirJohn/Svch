import type { Models } from "appwrite";
import { account } from "entities/appwrite/client";
import { useEffect, useState } from "react";

export const useUser = () => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		try {
			account
				.get()
				.then(setUser)
				.catch((error) => {
					setUser(null);
					console.log(error);
				})
				.finally(() => setLoading(false));
		} catch (error) {}
	}, []);

	return { user, loading };
};
