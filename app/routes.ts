import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("../pages/Home/Home.tsx"), route("/auth/sign-in", "../pages/Auth/Login.tsx"), route("/auth/sign-up", "../pages/Auth/Signup.tsx"), route("/dashboard", "../pages/Dashboard/Dashboard.tsx")] satisfies RouteConfig;
