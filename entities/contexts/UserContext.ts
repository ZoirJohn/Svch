import type { Models } from "appwrite";
import { createContext } from "react";

export const UserContext = createContext<{
	user: Models.User<Models.Preferences> | null;
	profile: Models.Document | null;
	loading: boolean;
	checkUser: () => void;
}>({ user: null, profile: null, loading: true, checkUser: () => {} });
