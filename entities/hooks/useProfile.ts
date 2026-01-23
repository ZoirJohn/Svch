import { AppwriteException, type Models } from "appwrite";
import { tables } from "entities/appwrite/client";
import { useCallback, useEffect, useState } from "react";
import type { Profile } from "shared/types";

export const useProfile = (rowId: string) => {
	const [profile, setProfile] = useState<Profile | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const fetchProfile = useCallback(async () => {
		try {
			setLoading(true);
			const response = await tables.getRow<Profile & Models.Row>({ databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID, rowId, tableId: "profiles" });
			setProfile(response);
		} catch (error) {
			if (error instanceof AppwriteException) {
				console.error(error.message);
				setProfile(null);
			}
		} finally {
			setLoading(false);
		}
	}, [rowId]);
	useEffect(() => {
		fetchProfile();
	}, [fetchProfile]);
	return { profile, loading, fetchProfile };
};
