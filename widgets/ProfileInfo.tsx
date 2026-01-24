import { getAge } from "entities/utils/getAge";
import { useMemo } from "react";
import type { Profile } from "shared/types";
import ProfileDetail from "shared/ui/ProfileDetail";

export default function ProfileInfo({ profile }: { profile: Omit<Profile, "profilePictureUrl"> }) {
	const doesAgeExist = new Date(profile?.dateOfBirth || new Date());
	const age = useMemo(() => getAge(doesAgeExist).toString(), [profile?.dateOfBirth]);
	const PROFILE_KEYS: (keyof typeof profile)[] = ["firstName", "lastName", "bio", "dateOfBirth", "location", "gender"];
	const LABELS = ["First name", "Last name", "Bio", "Age", "Location", "Gender"];

	return (
		<div className="flex p-4 gap-x-32 gap-16 flex-wrap">
			{PROFILE_KEYS.map((key, i) => (
				<ProfileDetail key={key} detail={LABELS[i]} value={key === "dateOfBirth" ? age : profile[key] || "Empty"} />
			))}
		</div>
	);
}
