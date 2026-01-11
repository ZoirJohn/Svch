import { Suspense } from "react";
import ProfileCard from "shared/ui/ProfileCard";

export default function Matches() {
	return (
		<section className="flex justify-center items-center p-4 h-full grow">
			<Suspense fallback={<>Loading...</>}>
				<ProfileCard bio={["dog dad", "hiker", "abuser"]} fullName="Baldur Buldur" age={22} img="/shared/img/profile.jpg" location="Laplandia" />
			</Suspense>
		</section>
	);
}
