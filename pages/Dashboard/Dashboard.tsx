import { Outlet } from "react-router";
import Sidebar from "widgets/Sidebar";

export default function Dashboard() {
	return (
		<main className="main">
			<Sidebar />
			<Outlet />
		</main>
	);
}
