import type { ReactNode } from "react";

export default function ProfileDetail({ icon, detail, value }: { icon: ReactNode; detail: "First name" | "Last name" | "Age" | "Location" | "Bio"; value: string }) {
	return (
		<div className="grid grid-cols-[20px_1fr] gap-x-4 items-center w-1/5">
			{icon}

			<p className="text-xl col-start-2 col-end-3">{detail}</p>
			<p className="text-xl text-gray-600 col-start-2 col-end-3">{value}</p>
		</div>
	);
}
