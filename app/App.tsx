import { Link } from "react-router";
import type { Route } from "./+types/root";

export function meta({}: Route.MetaArgs) {
	return [{ title: "Svch" }, { name: "description", content: "Svch - Created so you won't need us twice" }];
}

export default function Home() {
	return (
		<h1>
			Home
			<Link to={"/auth/login"}>Login</Link>
		</h1>
	);
}
