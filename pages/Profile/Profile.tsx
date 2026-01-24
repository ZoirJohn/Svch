import { UserContext } from "entities/contexts/UserContext";
import { useContext, useState } from "react";
import Form from "widgets/ProfileForm";
import ProfileInfo from "widgets/ProfileInfo";

export default function Profile() {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
	const { profile } = useContext(UserContext);
	if (!profile?.firstName) return <></>;

	const profileInfo = {
		firstName: profile.firstName,
		lastName: profile.lastName,
		bio: profile.bio,
		location: profile.location,
		gender: profile.gender,
		dateOfBirth: profile.dateOfBirth,
	};
	return (
		<section className="w-full flex p-4 flex-col items-start">
			<h2 className="text-3xl! w-full">Profile Details</h2>
			{isFormOpen ? <Form /> : <ProfileInfo profile={profileInfo} />}
			<button onClick={() => setIsFormOpen(true)} className="bg-blue-light py-2 px-4 rounded-xl hover:bg-blue-light/60 transition duration-400 self-end">
				Edit
			</button>
		</section>
	);
}
