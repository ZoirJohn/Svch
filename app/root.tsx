import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { UserContext, useUser } from "entities/appwrite/client";
import type { Models } from "appwrite";

export const links: Route.LinksFunction = () => [
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

const user = {
	$id: "69418c4097dfdd0ba2f4",
	$createdAt: "2025-12-16T16:43:44.626+00:00",
	$updatedAt: "2026-01-14T16:23:33.387+00:00",
	name: "Zoirjon Zokirjonov",
	registration: "2025-12-16T16:43:44.622+00:00",
	status: true,
	labels: [],
	passwordUpdate: "",
	email: "zoirbekzokirjonov2007@gmail.com",
	phone: "",
	emailVerification: true,
	phoneVerification: false,
	mfa: false,
	prefs: {},
	targets: [
		{
			$id: "69418c40a4bdc2b7eb80",
			$createdAt: "2025-12-16T16:43:44.674+00:00",
			$updatedAt: "2025-12-16T16:43:44.674+00:00",
			name: "",
			userId: "69418c4097dfdd0ba2f4",
			providerId: null,
			providerType: "email",
			identifier: "zoirbekzokirjonov2007@gmail.com",
			expired: false,
		},
	],
	accessedAt: "2026-01-14T16:23:33.384+00:00",
} as unknown as Models.User<Models.Preferences>;
const loading = false;
export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-white text-black">
				<div className="flex flex-col min-h-screen">
					<UserContext.Provider value={{ user, loading }}>{children}</UserContext.Provider>
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
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
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
