import type { Feedback } from "shared/types";

export default function FeedbackCard({ authors, feedback, img }: Feedback) {
	const showAuthors = (authors: string[]) => (authors.length > 1 ? `${authors[0]} and ${authors[1]}` : `${authors[0]}`);
	return (
		<div className="bg-white p-4 border border-blue-dark/60 dark:border-blue-dark/20 rounded-2xl xl:basis-3/7 md:basis-4/7 sm:basis-3/4 basis-full">
			<img src={img || "shared/img/wedding.avif"} alt="Feedback image" className="block w-full h-60 object-contain" loading="lazy" />
			<p className="text-xl sm:text-2xl">&quot;{feedback}&quot;</p>
			<p className="text-sm">{showAuthors(authors)}</p>
		</div>
	);
}
