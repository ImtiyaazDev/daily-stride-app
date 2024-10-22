import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />
	}
]);

export default function App() {
	return <RouterProvider router={router} />;
}
