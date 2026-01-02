import NavigationLink from "shared/ui/NavLink";

export default function Sidebar() {
	return (
		<aside className="basis-70 p-2">
			<div>
				<img src="/shared/icons/logo-light.svg" alt="Logo" className="block" />
			</div>
			<nav>
				<ul>
					<NavigationLink to="/dashboard/matches">Matches</NavigationLink>
					<NavigationLink to="/dashboard/messages">Messages</NavigationLink>
					<NavigationLink to="/dashboard/profile">Profile</NavigationLink>
					<NavigationLink to="/dashboard/settings">Settings</NavigationLink>
				</ul>
			</nav>
		</aside>
	);
}
