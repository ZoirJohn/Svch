import ProfileCard from "shared/ui/ProfileCard";

export default function Matches() {
	return (
		<section className="flex items-center justify-center h-full">
			<ProfileCard fullName="Baldur Buldur" age={22} img="/shared/img/profile.jpg" location="Laplandia" />
		</section>
	);
}
