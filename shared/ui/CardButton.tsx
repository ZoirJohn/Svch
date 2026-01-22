import type { ReactNode } from "react";
import { Link } from "react-router";

export default function CardButton({ link, type, children }: { link: string; type: "primary" | "secondary"; children: ReactNode }) {
	const style = type == "primary" ? " bg-blue-light basis-3/4 hover:bg-blue-light/80" : " bg-blue-dark text-white grow hover:bg-red-900 transition";
	return (
		<Link to={link} className={"flex gap-x-2 px-2 md:py-3 py-1 rounded-lg md:text-2xl text-lg justify-center duration-300" + style}>
			{children}
		</Link>
	);
}
