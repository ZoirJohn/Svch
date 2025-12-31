import { NavLink } from "react-router";

export default function Sidebar() {
	return (
		<aside>
			<nav>
				<ul>
					<li>
						<NavLink to="/dashboard/matches">Matches</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/profile">Profile</NavLink>
					</li>
					<li>
						<NavLink to="/dashboard/settings">Settings</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
