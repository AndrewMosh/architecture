import { Outlet } from "react-router-dom";

const App: React.FC = () => {
	return (
		<div>
            <h1>Admin</h1>
            <Outlet/>
        </div>
	);
};

export default App;
