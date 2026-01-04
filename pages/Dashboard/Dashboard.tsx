import { Outlet } from "react-router";
import Sidebar from "widgets/Sidebar";

export default function Dashboard() {
	return (
		<main className="main mx-auto w-full">
			<div className="container flex">
				<Sidebar />
				<section className="grow p-4">
					<Outlet />
				</section>
			</div>
		</main>
	);
}
