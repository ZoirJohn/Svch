export default function Message({ message, isOwn }: { message: string; isOwn: boolean }) {
	const style = isOwn ? "ml-auto" : "mr-auto";
	return (
		<li className={"relative max-w-80 flex p-2 bg-blue-light text-xl rounded-md flex-col"+" "+style}>
			<p className="">{message}</p>
			<p className="text-xs bottom-0 right-1 self-end">12:30</p>
		</li>
	);
}
