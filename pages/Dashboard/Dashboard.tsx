import { account } from "entities/appwrite/client";
import { useEffect } from "react";
import { Outlet } from "react-router";
import Sidebar from "widgets/Sidebar";

export default function Dashboard() {
	useEffect(() => {
		account.getSession({ sessionId: "current" }).then((session) => console.log(session.current));
	}, []);
	return (
		<main className="main mx-auto w-full">
			<div className="container flex">
				<Sidebar />

				<Outlet />
			</div>
		</main>
	);
}
