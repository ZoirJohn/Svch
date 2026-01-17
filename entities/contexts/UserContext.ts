import type { Models } from "appwrite";
import { createContext } from "react";

export const UserContext = createContext<{
	user: Models.User<Models.Preferences> | null;
	loading: boolean;
	checkUser: () => void;
}>({ user: null, loading: true, checkUser: () => {} });
