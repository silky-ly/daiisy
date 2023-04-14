import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

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
