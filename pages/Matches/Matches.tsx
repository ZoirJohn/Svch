import ProfileCard from "shared/ui/ProfileCard";
import profileImg from "../../shared/img/profile.jpg";

export default function Matches() {
	return (
		<section className="flex justify-center items-center p-4 h-full grow">
			<ProfileCard bio={"dog dad, hiker, abuser"} firstName="Baldur Buldur" lastName="" dateOfBirth={new Date().toLocaleString()} profilePictureUrl={profileImg} location="Laplandia" />
		</section>
	);
}
