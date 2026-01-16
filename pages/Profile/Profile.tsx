import { UserContext } from "entities/contexts/UserContext";
import { useContext } from "react";

export default function Profile() {
	const { user } = useContext(UserContext);
	return <section className="border w-full"></section>;
}
