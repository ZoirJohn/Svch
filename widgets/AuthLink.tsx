import { Link } from "react-router";

export default function AuthLink({ link }: { link: string }) {
	return (
		<Link
			to={link}
			className="text-blue-600 hover:underline mt-2"
		>
			Already have an account? Sign in
		</Link>
	);
}
