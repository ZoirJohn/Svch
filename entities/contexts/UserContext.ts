import type { Models } from "appwrite";
import { createContext } from "react";

export const UserContext = createContext<{
	user: Models.User<Models.Preferences> | null;
	loading: boolean;
}>({ user: null, loading: true });
