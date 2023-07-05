import Footer from '../components/app/Footer';
import Header from '../components/app/Header';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
