import { Link, Outlet } from "react-router-dom";
import s from './App.module.scss'

const App: React.FC = () => {
	return (
		<div className={s.app}>
			<div className={s.menu}><Link to="/shop">Shop</Link>
			<Link to="/admin">Admin</Link></div>
			<Outlet />
		</div>
	);
}

export default App