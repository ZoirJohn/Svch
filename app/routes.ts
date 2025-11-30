import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("../pages/Home/Home.tsx"), route("/auth/login", "../pages/Auth/Login.tsx"), route("/auth/signup", "../pages/Auth/Signup.tsx")] satisfies RouteConfig;
