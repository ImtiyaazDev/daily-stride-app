import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Journal from "./pages/Journal";
import Habits from "./pages/Habits";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />
			},
			{
				path: "/goals",
				element: <Goals />
			},
			{
				path: "/journal",
				element: <Journal />
			},
			{
				path: "/habits",
				element: <Habits />
			}
		]
	}
]);

export default function App() {
	return <RouterProvider router={router} />;
}
