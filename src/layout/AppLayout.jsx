import { Outlet } from "react-router-dom";

import Sidebar from "../ui/Sidebar";

export default function AppLayout() {
	return (
		<div className="grid h-screen grid-cols-[18rem_1fr] grid-rows-[auto_1fr]">
			<Sidebar />
			<header className="col-span-1 bg-green-300">HEADER</header>
			<main className="overflow-scroll bg-orange-300 p-10">
				<div className="max-w-[120rem] bg-purple-300">
					<Outlet />
				</div>
			</main>
		</div>
	);
}
