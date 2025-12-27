import { Link } from "react-router";

export default function AuthLink({ link, linkText }: { link: string; linkText: string }) {
	return (
		<Link
			to={link}
			className="text-blue-600 hover:underline mt-2"
		>
			{linkText}
		</Link>
	);
}
