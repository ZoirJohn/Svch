export default function Home() {
	return (
		<>
			<section className="mt-3 px-3">
				<div className="mx-auto container">
					<div className="relative rounded-3xl min-h-180 overflow-hidden banner select-none">
						<img
							src="/assets/img/banner.png"
							alt="Banner"
							className="z-1 absolute w-full"
						/>
						<div className="group z-2 relative flex flex-col justify-end items-center hover:bg-blue-light/45 min-h-[inherit] text-white transition-all *:transition-all *:duration-500 gap-10">
							<p className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-40 text-xl">Delete us after the wedding.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
