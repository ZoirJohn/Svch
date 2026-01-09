import type { Profile } from "shared/types";

export default function ProfileCard(props: Profile) {
	const { fullName, age, img, location } = props;
	const bio = ["Dog dad", "Hiker", "Always cold"];
	return (
		<div className="flex flex-col rounded-2xl w-full max-w-80 min-h-100 overflow-hidden shadow-xl">
			<div className="max-h-60 overflow-hidden">
				<img src={img} alt="Profile picture" className="object-cover aspect-square" />
			</div>

			<div className="px-4 py-1">
				<h5 className="font-semibold">
					{fullName}, {age}
				</h5>
				<p className="text-xl text-gray-600">{location}</p>
			</div>
			<div className="px-4 py-1">
				<p>{"Wassup cutie?"}</p>
			</div>
			<div className="px-4 py-1">
				<p className="flex">
					{bio.map((text, idx) => (
						<>
							<span>{text}</span>
							{bio.length - 1 != idx && <span className="block bg-black mx-2 mt-2.5 rounded-full w-1.5 h-1.5"></span>}
						</>
					))}
				</p>
			</div>

			{/* <div className="p-2">CardButton</div> */}
		</div>
	);
}
