import type { ReactNode } from "react";
import { Link } from "react-router";

export default function CardButton({ link, type, children }: { link: string; type: "primary" | "secondary"; children: ReactNode }) {
	const style = type == "primary" ? "flex gap-x-2 bg-blue-dark px-2 py-1 rounded-lg text-white text-lg basis-1/2 grow-0" : "flex gap-x-2 bg-blue-light px-2 py-1 rounded-lg text-lg basis-1/2 grow-0";
	return (
		<Link to={link} className={style}>
			{children}
		</Link>
	);
}
