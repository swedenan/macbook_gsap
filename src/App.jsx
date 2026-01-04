import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Features from './components/Features .jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import Performance from './components/Performance.jsx'
import ProductViewer from './components/ProductViewer.jsx'
import Showcase from './components/Showcase.jsx'

gsap.registerPlugin(ScrollTrigger)

function App() {
	return (
		<main>
			<NavBar />
			<Hero />
			<ProductViewer />
			<Showcase />
			<Performance />
			<Features />
			<Footer />
		</main>
	)
}

export default App
