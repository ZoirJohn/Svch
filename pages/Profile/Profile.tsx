import { UserContext } from "entities/contexts/UserContext";
import { getAge } from "entities/utils/getAge";
import { useContext, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import type { Field, Profile } from "shared/types";
import FormField from "shared/ui/FormField";
import ProfileDetail from "shared/ui/ProfileDetail";

const profileFields = [
	{
		firstName: {
			label: "First name",
			inputType: "text" as const,
			autoComplete: "name" as const,
			rules: {
				required: "Please enter a first name",
			},
		},
		lastName: {
			label: "First name",
			inputType: "text" as const,
			autoComplete: "name" as const,
			rules: {
				required: "Please enter a first name",
			},
		},
		// bio: {
		// 	label: "Bio",
		// 	inputType: "text" as const,
		// 	autoComplete:,
		// },
	},
];

export default function Profile() {
	const [isFormOpen, setIsFormOpen] = useState<boolean>(true);
	const { profile } = useContext(UserContext);
	
	const {
		register,
		formState: { errors },
	} = useForm();

	return (
		<section className="w-full flex p-4 flex-wrap items-start self-start">
			<h2 className="text-3xl! w-full">Profile Details</h2>
			{isFormOpen ? <Form /> : <ProfileInfo profile={profile} />}
		</section>
	);
}

function Form() {
	return <form action="flex basis-1/2">
		
	</form>;
}
function ProfileInfo({ profile }: { profile: Profile | null }) {
	const doesAgeExist = new Date(profile?.dateOfBirth || new Date());
	const age = useMemo(() => getAge(doesAgeExist).toString(), [profile?.dateOfBirth]);
	const setIsFormOpen=(value:boolean)=>{}
	return (
		<div className="flex justify-between flex-wrap gap-12 grow p-8">
			<ProfileDetail
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-gray-600 col-start-1 col-end-2 size-5">
						<path d="M48 416l0-256 480 0 0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM376 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
					</svg>
				}
				detail="First name"
				value={profile?.firstName || "Empty"}
			/>
			<ProfileDetail
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-gray-600 col-start-1 col-end-2 size-5">
						<path d="M48 416l0-256 480 0 0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM376 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
					</svg>
				}
				detail="Last name"
				value={profile?.lastName || "Empty"}
			/>
			<ProfileDetail
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-gray-600 col-start-1 col-end-2 size-5">
						<path d="M48 416l0-256 480 0 0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM376 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
					</svg>
				}
				detail="Age"
				value="24"
			/>
			<ProfileDetail
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-gray-600 col-start-1 col-end-2 size-5">
						<path d="M48 416l0-256 480 0 0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM376 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
					</svg>
				}
				detail="Bio"
				value={profile?.bio?.length ? "There is bio" : "Empty"}
			/>
			<ProfileDetail
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-gray-600 col-start-1 col-end-2 size-5">
						<path d="M120 0c13.3 0 24 10.7 24 24l0 40 160 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 32 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l32 0 0-40c0-13.3 10.7-24 24-24zm0 112l-56 0c-8.8 0-16 7.2-16 16l0 48 352 0 0-48c0-8.8-7.2-16-16-16l-264 0zM48 224l0 192c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-192-352 0z" />
					</svg>
				}
				detail="Age"
				value={age == "0" ? "Empty" : age}
			/>
			<span onClick={() => setIsFormOpen(true)}>Edit</span>
		</div>
	);
}
