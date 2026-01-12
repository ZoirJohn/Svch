export default function Hero() {
	return (
		<section className="mt-3">
			<div className="container">
				<div className="relative rounded-4xl overflow-hidden select-none banner">
					<img src="shared/img/banner.avif" alt="Banner" className="block grow shrink-0 h-full min-h-full" fetchPriority="high" loading="eager" />
					<div className="group z-2 absolute inset-0 flex flex-col justify-end items-center gap-10 hover:bg-blue-light/45 object-cover text-white transition-all *:transition-all *:duration-500">
						<p className="opacity-0 group-hover:opacity-100 text-xl group-hover:-translate-y-40 caslon-black">Delete us after the wedding.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
