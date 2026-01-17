import womanImg from "shared/img/woman.avif";
import manImg from "shared/img/man.avif";
import matchImg from "shared/img/match.avif";
import nooneImg from "shared/img/noone.avif";
import meetImg from "shared/img/meet.avif";

export default function ProductExplanation() {
	const actions: { img: string; alt: string; title: string; description: string; reverse?: boolean }[] = [
		{
			img: womanImg,
			alt: "woman-image",
			title: "Sign Up With Purpose",
			description: "Create your profile. Let others know you’re serious about family-focused connections.",
		},
		{
			img: manImg,
			alt: "man-image",
			title: "Take the Sovchi Test",
			description: "Answer questions about values, lifestyle, and family goals. It’s quick and insightful.",
			reverse: true,
		},
		{
			img: matchImg,
			alt: "match",
			title: "Get Your One Match",
			description: "Sovchi doesn’t send you lists. You receive only one carefully selected match — the person who aligns most closely with your values and long-term goals.",
		},
		{
			img: nooneImg,
			alt: "nothing-found",
			title: "If There’s No Match Yet",
			description: "You won’t see random profiles. Sovchi simply lets you know it’s still searching, keeping the process respectful and intentional.",
			reverse: true,
		},
		{
			img: meetImg,
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
					<div className={"flex items-center justify-center xl:gap-8 lg:gap-4 flex-col" + (reverse ? " md:flex-row-reverse" : " md:flex-row")} key={img + "-" + Math.random()}>
						<img src={img} alt={alt} className="w-100" loading="lazy" />
						<div className="flex flex-col md:gap-4 max-w-100 xl:max-w-125">
							<h3 className="text-blue-dark">{title}</h3>
							<p className="text-xl">{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
