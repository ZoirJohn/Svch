import { UserContext } from "entities/contexts/UserContext";
import { useContext, useState } from "react";
import Form from "widgets/ProfileForm";
import ProfileInfo from "widgets/ProfileInfo";

export default function Profile() {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
	const { profile, user } = useContext(UserContext);
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
			{isFormOpen ? <Form defaultValues={profile} closeForm={() => setIsFormOpen(false)} rowId={user?.$id || ""} /> : <ProfileInfo profile={profileInfo} closeProfile={() => setIsFormOpen(true)} />}
		</section>
	);
}
