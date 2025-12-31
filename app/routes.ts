import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("../pages/Home/Home.tsx"),
	route("/auth/sign-in", "../pages/Auth/Login.tsx"),
	route("/auth/sign-up", "../pages/Auth/Signup.tsx"),
	// Dashboard
	route("/dashboard", "../pages/Dashboard/Dashboard.tsx", [
		index('../pages/Dashboard/index.tsx'),
		route("matches", "../pages/Matches/Matches.tsx"), //
		route("profile", "../pages/Profile/Profile.tsx"), //
		route("settings", "../pages/Settings/Settings.tsx"),
	]),
] satisfies RouteConfig;
