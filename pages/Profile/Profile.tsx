import { UserContext } from "entities/contexts/UserContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import ProfileDetail from "shared/ui/ProfileDetail";

export default function Profile() {
	const { user } = useContext(UserContext);
	const { register } = useForm();

	const getAge = (date: Date) => {
		const thisDate = new Date();
		const [thisYear, thisMonth, thisDay] = [thisDate.getFullYear(), thisDate.getMonth(), thisDate.getDate()];
		const [birthYear, birthMonth, birthDay] = [date.getFullYear(), date.getMonth(), date.getDate()];
		let age = thisYear - birthYear;
		if (thisMonth > birthMonth || (thisMonth == birthMonth && thisDay < birthDay)) age--;
		return age;
	};
	return (
		<section className="w-full flex p-4 flex-wrap items-start self-start">
			<h2 className="text-3xl! w-full">Profile Details</h2>

			<div className="flex justify-between flex-wrap gap-12 grow p-8">
				<ProfileDetail
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-gray-600 col-start-1 col-end-2 size-5">
							<path d="M48 416l0-256 480 0 0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM376 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
						</svg>
					}
					detail="First name"
					value="Nani"
				/>
				<ProfileDetail
					icon={
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-gray-600 col-start-1 col-end-2 size-5">
							<path d="M48 416l0-256 480 0 0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM208 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM376 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z" />
						</svg>
					}
					detail="Last name"
					value="Nani"
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
			</div>

			<form action="flex basis-1/2"></form>
		</section>
	);
}
