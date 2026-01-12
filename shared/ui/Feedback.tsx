import type { Feedback } from "shared/types";
import FeedbackCard from "./FeedbackCard";

const feedbacks: Feedback[] = [{ feedback: "Be the first ones to be here", authors: ["Sincerely, Svch Team"], img: "" }];

export default function Feedback() {
	return (
		<section className="mt-10">
			<div className={"container flex flex-wrap " + (feedbacks.length > 1 ? "justify-between" : "justify-center")}>
				<h2 className="text-center mb-8 basis-full">
					What do our <span className="text-blue-dark">Happy Users</span> say?
				</h2>
				{feedbacks.map(({ authors, feedback, img }) => (
					<FeedbackCard authors={authors} feedback={feedback} img={img} key={img + new Date().getMilliseconds()} />
				))}
			</div>
		</section>
	);
}
