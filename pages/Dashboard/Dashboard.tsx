import { Outlet } from "react-router";
import Sidebar from "widgets/Sidebar";

export default function Dashboard() {
	return (
		<main className="main mx-auto w-full">
			<div className="container flex">
				<Sidebar />
				
				<Outlet/>
			</div>
		</main>
	);
}
