import Footer from "components/Footer";
import Header from "components/Header";
import Hero from "components/Hero";
import ProductExplanation from "components/ProductExplanation";

export default function Home() {
	return (
		<>
			<Header />
			<main className="shrink-0 grow">
				<Hero />
				<ProductExplanation />
			</main>
			<Footer />
		</>
	);
}
