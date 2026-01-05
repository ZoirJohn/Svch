export default function ProductExplanation() {
	const actions: { img: string; alt: string; title: string; description: string; reverse?: boolean }[] = [
		{
			img: "shared/img/woman.avif",
			alt: "woman-image",
			title: "Sign Up With Purpose",
			description: "Create your profile. Let others know you’re serious about family-focused connections.",
		},
		{
			img: "shared/img/man.avif",
			alt: "woman-image",
			title: "Take the Sovchi Test",
			description: "Answer questions about values, lifestyle, and family goals. It’s quick and insightful.",
			reverse: true,
		},
		{
			img: "shared/img/match.avif",
			alt: "match",
			title: "Get Your One Match",
			description: "Sovchi doesn’t send you lists. You receive only one carefully selected match — the person who aligns most closely with your values and long-term goals.",
		},
		{
			img: "shared/img/noone.avif",
			alt: "nothing-found",
			title: "If There’s No Match Yet",
			description: "You won’t see random profiles. Sovchi simply lets you know it’s still searching, keeping the process respectful and intentional.",
			reverse: true,
		},
		{
			img: "shared/img/meet.avif",
			alt: "dating",
			title: "Meet With Confidence",
			description: "When both sides agree, Sovchi guides the first steps toward meeting — safe, clear, and focused on building something real.",
		},
	];
	return (
		<section className="mt-10 layout-section">
			<div className="container">
				<h2 className="mb-8 text-center">
					How does <span className="text-blue-dark">Svch</span> work?
				</h2>
				{actions.map(({ img, alt, title, description, reverse }) => (
					<div className={"flex items-center justify-center xl:gap-8 gap-4 flex-col" + (reverse ? " md:flex-row-reverse" : " md:flex-row")} key={img + "-" + Math.random()}>
						<img src={img} alt={alt} className="w-100" loading="lazy" />
						<div className="flex flex-col gap-4 xl:max-w-125 max-w-100">
							<h3 className="text-blue-dark ">{title}</h3>
							<p className="text-xl">{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
