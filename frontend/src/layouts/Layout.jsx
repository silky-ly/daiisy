import Footer from '../components/app/Footer';
import Navbar from '../components/app/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
