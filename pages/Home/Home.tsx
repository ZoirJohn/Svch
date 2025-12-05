import Feedback from "widgets/Feedback";
import Footer from "widgets/Footer";
import Header from "widgets/Header";
import Hero from "widgets/Hero";
import ProductExplanation from "widgets/ProductExplanation";

export default function Home() {
	return (
		<>
			<Header />
			<main className="shrink-0 grow">
				<Hero />
				<ProductExplanation />
				<Feedback />
			</main>
			<Footer />
		</>
	);
}
