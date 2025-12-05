export default function ProductExplanation() {
	const actions: { img: string; alt: string; title: string; description: string; reverse?: boolean }[] = [
		{
			img: "shared/img/woman.png",
			alt: "woman-image",
			title: "Sign Up With Purpose",
			description: "Create your profile. Let others know you’re serious about family-focused connections.",
		},
		{
			img: "shared/img/man.png",
			alt: "woman-image",
			title: "Take the Sovchi Test",
			description: "Answer questions about values, lifestyle, and family goals. It’s quick and insightful.",
			reverse: true,
		},
		{
			img: "shared/img/match.png",
			alt: "match",
			title: "Get Your One Match",
			description: "Sovchi doesn’t send you lists. You receive only one carefully selected match — the person who aligns most closely with your values and long-term goals.",
		},
		{
			img: "shared/img/noone.png",
			alt: "nothing-found",
			title: "If There’s No Match Yet",
			description: "You won’t see random profiles. Sovchi simply lets you know it’s still searching, keeping the process respectful and intentional.",
			reverse: true,
		},
		{
			img: "shared/img/meet.png",
			alt: "dating",
			title: "Meet With Confidence",
			description: "When both sides agree, Sovchi guides the first steps toward meeting — safe, clear, and focused on building something real.",
		},
	];
	return (
		<section className="mt-10 layout-section">
			<div className="container">
				<h2 className="text-center mb-8">
					How does <span className="text-blue-dark">Svch</span> work?
				</h2>
				{actions.map(({ img, alt, title, description, reverse }) => (
					<div
						className={"flex items-center justify-center gap-8" + (reverse ? " flex-row-reverse" : "")}
						key={img + "-" + Math.random()}
					>
						<img
							src={img}
							alt={alt}
							className="w-120"
						/>
						<div className="basis-1/3 flex flex-col gap-4">
							<h4 className="text-nowrap text-blue-dark">{title}</h4>
							<p className="text-xl">{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
