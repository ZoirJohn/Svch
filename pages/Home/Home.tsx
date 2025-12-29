import Feedback from "shared/ui/Feedback";
import Footer from "widgets/Footer";
import Header from "widgets/Header";
import Hero from "shared/ui/Hero";
import ProductExplanation from "shared/ui/ProductExplanation";

export default function Home() {
	return (
		<>
			<Header />
			<main className="shrink-0 grow px-3">
				<Hero />
				<ProductExplanation />
				<Feedback />
			</main>
			<Footer />
		</>
	);
}
