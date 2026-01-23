import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { UserContext } from "entities/contexts/UserContext";
import { useUser } from "entities/hooks/useUser";
import { useProfile } from "entities/hooks/useProfile";

export const links: Route.LinksFunction = () => [
	{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Funnel+Sans:ital,wght@0,300..800;1,300..800&display=swap",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	const { user, loading, checkUser } = useUser();
	const { profile, fetchProfile } = useProfile(user?.$id || "");
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<link rel="icon" type="image/png" href="/favicon.png" />
			</head>
			<body className="bg-white text-black">
				<div className="flex flex-col min-h-screen">
					<UserContext.Provider value={{ user, loading, checkUser, profile }}>{children}</UserContext.Provider>
					<ScrollRestoration />
					<Scripts />
				</div>
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}
export function meta({}: Route.MetaArgs) {
	return [{ title: "Svch" }, { name: "description", content: "Svch - Created so you won't need us twice" }];
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status == 404 ? "404" : "Error";
		details = error.status == 404 ? "The requested page could not be found." : error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="mx-auto p-4 pt-16 container">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="p-4 w-full overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
