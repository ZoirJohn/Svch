export default function Hero() {
	return (
		<section className="mt-3 px-3">
			<div className="container">
				<div className="relative rounded-3xl md:min-h-120 lg:min-h-170 xl:min-h-180 sm:min-h-100 xs:min-h-75 xxs:min-h-50 overflow-hidden select-none banner">
					<img
						src="shared/img/banner.png"
						alt="Banner"
						className="z-1 absolute w-full top-0 translate-y-0"
					/>
					<div className="group z-2 relative flex flex-col justify-end items-center gap-10 hover:bg-blue-light/45 min-h-[inherit] text-white transition-all *:transition-all *:duration-500">
						<p className="opacity-0 group-hover:opacity-100 text-xl group-hover:-translate-y-40 caslon-black">Delete us after the wedding.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
