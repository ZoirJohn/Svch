import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("./App.tsx"), route("/auth/login", "./pages/Auth/Login.tsx"), route("/auth/signup", "./pages/Auth/Signup.tsx")] satisfies RouteConfig;
