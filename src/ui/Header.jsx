import { IconSettings, IconSun } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Header() {
  // TODO: Add hover and active states using framer motion

	return (
		<header className="bg-body-componentLight col-span-1 flex items-center justify-between px-10 py-8">
			<h1 className="font-heading text-3xl font-medium text-primaryRed-400">
				Dashboard
			</h1>
			<div className="flex items-center gap-8">
				<p className="font-medium text-primaryBlueLight-950">Sarah Mitchell</p>
				<div className="flex items-center gap-4">
					<button className="rounded-lg border border-body-textLight p-2">
						<IconSun />
					</button>
					<Link
						className="rounded-lg border border-body-textLight p-2"
						to="/settings"
					>
						<IconSettings />
					</Link>
					<figure className="aspect-square w-[42px] rounded-lg border border-body-textLight bg-red-100 p-2">
						<img
							src=""
							alt=""
							loading="lazy"
						/>
					</figure>
				</div>
			</div>
		</header>
	);
}
