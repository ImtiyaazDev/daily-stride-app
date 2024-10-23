import {
	IconCircleDashed,
	IconClipboardText,
	IconLayoutGrid,
	IconLogout2,
	IconTargetArrow
} from "@tabler/icons-react";
import { sidebarLinks } from "../utils/data";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
	const { pathname } = useLocation();

	// TODO: Use framer motion for hover and tapping states

	return (
		<aside className="col-start-1 col-end-2 row-span-full flex flex-col items-center bg-body-componentLight px-8 py-15">
			<figure className="-mt-8 w-40">
				<img
					src="/assets/logo.png"
					alt="Daily Stride logo"
					loading="lazy"
				/>
			</figure>
			<nav className="flex h-full flex-col items-center justify-between">
				<ul className="flex flex-col items-start gap-4">
					{sidebarLinks.map((link, index) => (
						<li
							key={`${link.id}-${index}`}
							className={`flex w-full items-center gap-3 rounded-lg px-6 py-3 font-heading font-medium ${pathname === link.to ? "bg-primaryBlueLight-200 text-primaryBlueLight-800" : "text-body-textLight"}`}
						>
							{link?.text.includes("Dashboard") && <IconLayoutGrid size={24} />}
							{link?.text.includes("Goals") && <IconTargetArrow size={24} />}
							{link?.text.includes("Habits") && <IconCircleDashed size={24} />}
							{link?.text.includes("Journal") && (
								<IconClipboardText size={24} />
							)}
							<NavLink
								to={link.to}
								className={({ isActive }) => [
									isActive ? "text-primaryBlueLight-800" : "text-body-textLight"
								]}
							>
								{link.text}
							</NavLink>
						</li>
					))}
				</ul>
				<div className="flex w-full items-center gap-3 rounded-lg bg-primaryRed-200 px-6 py-3 font-heading font-medium text-primaryRed-800">
					<IconLogout2 size={24} />
					<Link to="/login">Logout</Link>
				</div>
			</nav>
		</aside>
	);
}
