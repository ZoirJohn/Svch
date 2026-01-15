import { useForm } from "react-hook-form";
import Message from "shared/ui/Message";

export default function Messages() {
	const form = useForm({});
	return (
		<section className="flex justify-center items-center p-4 w-full max-h-screen overflow-hidden">
			<div className="flex flex-col justify-end h-full basis-full">
				<div className="flex gap-x-4 items-center">
					<img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Profile photo" className="size-24 object-cover rounded-full" />
					<h4>Bulbul</h4>
				</div>
				<ul className="[&::-webkit-scrollbar]:hidden flex flex-col items-start gap-y-2 py-2 overflow-scroll [scrollbar-width:none] grow">
				</ul>
				<form action="#" className="flex items-center gap-x-2 shrink-0">
					<textarea name="" id="" className="[&::-webkit-scrollbar]:hidden px-2 py-1 border border-blue-dark rounded-xl focus:outline-0 min-h-22 text-xl resize-none grow"></textarea>
					<button className="flex items-center gap-x-2 bg-black px-6 py-2 rounded-3xl text-white">
						Send
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-white size-5">
							<path d="M290.5 287.7L491.4 86.9 359 456.3 290.5 287.7zM457.4 53L256.6 253.8 88 185.3 457.4 53zM38.1 216.8l205.8 83.6 83.6 205.8c5.3 13.1 18.1 21.7 32.3 21.7 14.7 0 27.8-9.2 32.8-23.1L570.6 8c3.5-9.8 1-20.6-6.3-28s-18.2-9.8-28-6.3L39.4 151.7c-13.9 5-23.1 18.1-23.1 32.8 0 14.2 8.6 27 21.7 32.3z" />
						</svg>
					</button>
				</form>
			</div>
		</section>
	);
}
