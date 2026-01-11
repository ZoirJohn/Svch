import Feedback from "shared/ui/Feedback";
import Footer from "widgets/Footer";
import Header from "widgets/Header";
import Hero from "shared/ui/Hero";
import ProductExplanation from "shared/ui/ProductExplanation";

export default function Home() {
	return (
		<>
			<Header />
			<main className="px-3 shrink-0 grow gap-y-4 flex flex-col">
				<h1 className="sr-only">Sovchi - Find your person</h1>
				<Hero />
				<ProductExplanation />
				<Feedback />
			</main>
			<Footer />
		</>
	);
}
