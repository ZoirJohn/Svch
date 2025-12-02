export default function ProductExplanation() {
	const actions: { img: string; alt: string; title: string; description: string; reverse?: boolean }[] = [
		{
			img: "assets/img/woman.png",
			alt: "woman-image",
			title: "Sign Up With Purpose",
			description: "Create your profile. Let others know you’re serious about family-focused connections.",
		},
		{
			img: "assets/img/man.png",
			alt: "woman-image",
			title: "Take the Sovchi Test",
			description: "Answer questions about values, lifestyle, and family goals. It’s quick and insightful.",
			reverse: true,
		},
		{
			img: "assets/img/woman.png",
			alt: "woman-image",
			title: "Sign Up With Purpose",
			description: "Create your profile. Let others know you’re serious about family-focused connections.",
		},
	];
	return (
		<section className="mt-10 layout-section">
			<div className="container">
				<h2 className="text-center mb-8">
					How does <span className="text-blue-dark">Svch</span> work?
				</h2>
				{actions.map(({ img, alt, title, description, reverse }) => (
					<div className={"flex items-center justify-center gap-8" + (reverse ? " flex-row-reverse" : "")}>
						<img
							src={img}
							alt={alt}
							className="w-120"
						/>
						<div className="basis-1/3 flex flex-col gap-4">
							<h4>{title}</h4>
							<p className="text-2xl">{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
