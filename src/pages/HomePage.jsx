import { Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import BooksPage from './BooksPage';
import UsersPage from './UsersPage';
import HomeUserInfo from './HomeUserInfo';

function HomePage() {
	return (
		<div className='main-container'>
			<NavigationBar />
			<Routes>
				<Route path='/' element={<HomeUserInfo />} />
				<Route path='/books' element={<BooksPage />} />
				<Route path='/users' element={<UsersPage />} />
			</Routes>
		</div>
	);
}

export default HomePage;
