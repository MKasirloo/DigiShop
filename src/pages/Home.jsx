import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Home.css'

export default function Home() {
  return(
		<>
			<Header cartCount={0}/>
			<div className="header-fixer"></div>
			<Container>

			</Container>
			<Footer />
		</>
  );
}