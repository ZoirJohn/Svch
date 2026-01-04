import { NavLink } from "react-router";
import type { NavigationLinkType } from "widgets/Sidebar";

export default function NavigationLink({ icon, text, link }: NavigationLinkType) {
	const activeStyle = ({ isActive }: { isActive: boolean }) => (isActive ? "bg-blue-dark dark:bg-blue-light" : "bg-blue-light dark:bg-white") + " text-lg block p-3 rounded-xl flex items-center gap-x-4";

	return (
		<li>
			<NavLink to={link} className={activeStyle}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="basis-6 shrink-0 text-center">
					{icon}
				</svg>

				<span className={"leading-6 max-md:invisible max-md:opacity-0 "}>{text}</span>
			</NavLink>
		</li>
	);
}
