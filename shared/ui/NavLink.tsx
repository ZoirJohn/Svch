import { NavLink } from "react-router";

export default function NavigationLink({ to, children }: { to: string; children: string }) {
	const activeStyle = ({ isActive }: { isActive: boolean }) => (isActive ? "bg-blue-dark dark:bg-blue-light" : "bg-blue-light dark:bg-white") + " text-lg block py-3 px-7 rounded-xl";
	return (
		<li>
			<NavLink to={to} className={activeStyle}>
				{children}
			</NavLink>
		</li>
	);
}
