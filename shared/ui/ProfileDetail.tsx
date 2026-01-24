export default function ProfileDetail({ detail, value }: { detail: "First name" | "Last name" | "Age" | "Location" | "Bio"; value: string }) {
	return (
		<div className="flex flex-col">
			<p className="col-start-2 col-end-3">{detail}</p>
			<p className="text-xl text-gray-600 col-start-2 col-end-3">{value}</p>
		</div>
	);
}
