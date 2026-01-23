import type { Models } from "appwrite";
import { createContext } from "react";
import type { Profile } from "shared/types";

export const UserContext = createContext<{
	user: Models.User<Models.Preferences> | null;
	profile: Profile | null;
	loading: boolean;
	checkUser: () => void;
}>({ user: null, profile: null, loading: true, checkUser: () => {} });
