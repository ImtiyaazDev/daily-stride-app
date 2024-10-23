import { Outlet } from "react-router-dom";

import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";

export default function AppLayout() {
	return (
		<div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
			<Sidebar />
			<Header />
			<main className="bg-body-bgLight overflow-scroll p-10">
				<div className="max-w-[120rem]">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
