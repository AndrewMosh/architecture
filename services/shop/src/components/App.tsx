import { Outlet } from "react-router-dom";

const App: React.FC = () => {
	return (
		<div>
		<h1>Shop</h1>
		<Outlet />	
		</div>
	);
};

export default App;
