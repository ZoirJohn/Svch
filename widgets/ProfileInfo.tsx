import { getAge } from "entities/utils/getAge";
import { useMemo } from "react";
import type { Profile } from "shared/types";
import ProfileDetail from "shared/ui/ProfileDetail";

export default function ProfileInfo({ profile }: { profile: Profile | null }) {
	const doesAgeExist = new Date(profile?.dateOfBirth || new Date());
	const age = useMemo(() => getAge(doesAgeExist).toString(), [profile?.dateOfBirth]);
	return (
		<div className="flex p-4 gap-32 flex-wrap">
			{/* <ProfileDetail detail="First name" value={profile?.firstName || "Empty"} />
			<ProfileDetail detail="Last name" value={profile?.lastName || "Empty"} />
			<ProfileDetail detail="Age" value="24" />
			<ProfileDetail detail="Bio" value={profile?.bio?.length ? "There is bio" : "Empty"} />
			<ProfileDetail detail="Age" value={age == "0" ? "Empty" : age} /> */}
		</div>
	);
}
