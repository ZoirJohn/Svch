import { UserContext } from "entities/contexts/UserContext";
import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import Sidebar from "widgets/Sidebar";

export default function Dashboard() {
	const { user, loading } = useContext(UserContext);
	if (loading) return <></>;
	if (!user) return <Navigate replace to={"/auth/sign-up"} />;
	return (
		<main className="main mx-auto w-full">
			<div className="container flex">
				<Sidebar />

				<Outlet />
			</div>
		</main>
	);
}
