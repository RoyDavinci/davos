import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import FeaturesSection from "./components/Featured";
import TestimonialsSection from "./components/Testimonial";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App bg-darkBg'>
			<LandingPage />
			<FeaturesSection />
			<TestimonialsSection />
			<FAQSection />
			<Footer />
		</div>
	);
}

export default App;
