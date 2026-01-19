import ProfileCard from "shared/ui/ProfileCard";
import profileImg from "../../shared/img/profile.jpg";

export default function Matches() {
	return (
		<section className="flex justify-center items-center p-4 h-full grow">
			<ProfileCard bio={["dog dad", "hiker", "abuser"]} fullName="Baldur Buldur" age={22} img={profileImg} location="Laplandia" />
		</section>
	);
}
