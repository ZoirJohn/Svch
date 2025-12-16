import type { Feedback } from "shared/types";

export default function FeedbackCard({ authors, feedback, img }: Feedback) {
	const showAuthors = (authors: string[]) => (authors.length > 1 ? `${authors[0]} and ${authors[1]}` : `${authors[0]}`);
	return (
		<div className="border dark:border-blue-dark/20 border-blue-dark/60 rounded-2xl basis-3/7 p-4 bg-white">
			<img
				src={img || "shared/img/wedding.avif"}
				alt="Feedback image"
				className="h-60 block w-full object-contain"
				loading="lazy"
			/>
			<p className="text-2xl">&quot; {feedback} &quot;</p>
			<p className="text-sm">{showAuthors(authors)}</p>
		</div>
	);
}
