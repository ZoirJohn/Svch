import type { Profile } from "shared/types";
import CardButton from "./CardButton";

export default function ProfileCard(props: Profile) {
	const { fullName, age, img, location, bio } = props;
	return (
		<>
			<div className="group relative flex shadow-xl rounded-2xl w-full max-w-120 min-h-160 overflow-hidden max-xs:min-h-100">
				<div className="z-2 absolute size-full before">
					<img src={img} alt="Profile picture" className="size-full object-cover group-hover:scale-105 duration-500" />
				</div>
				<div className="z-3 relative flex flex-col justify-end gap-y-2 bg-linear-to-t from-black to-40% p-8 font-bold grow  max-md:p-4">
					<h3 className="text-white max-xs:text-2xl!">
						{fullName}, {age}
					</h3>
					<p className="flex items-center gap-x-1 font-medium text-gray-200 text-lg">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-gray-200 w-4">
							<path d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z" />
						</svg>
						{location}
					</p>
					<p className="text-gray-200 italic">"Wassup"</p>
					<div className="flex flex-wrap gap-2 mb-2 text-white">
						{bio?.split(" ").map((tag) => (
							<span key={tag} className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-full font-bold text-[10px] uppercase tracking-widest">
								{tag}
							</span>
						))}
					</div>
					<div className="flex gap-3">
						<CardButton link="/dashboard/messages" type="primary">
							Message
						</CardButton>
						<CardButton link="/dashboard/messages" type="secondary">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5.5">
								<path d="M367.2 412.5L99.5 144.8c-22.4 31.4-35.5 69.8-35.5 111.2 0 106 86 192 192 192 41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3c22.4-31.4 35.5-69.8 35.5-111.2 0-106-86-192-192-192-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z" />
							</svg>
						</CardButton>
					</div>
				</div>
			</div>
		</>
	);
}
