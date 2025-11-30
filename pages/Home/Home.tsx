import type { ReactNode } from "react";
import { Link } from "react-router";

export default function Home({ children }: { children: ReactNode }) {
	return (
		<>
			Home
			<button>
				<Link to={"/auth/login"}>Login</Link>
			</button>
		</>
	);
}
