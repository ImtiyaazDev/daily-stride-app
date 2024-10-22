export default function AppLayout() {
	return (
		<div className="grid h-screen grid-cols-[20rem_1fr] grid-rows-[auto_1fr]">
			<header className="col-span-1 bg-green-300">HEADER</header>
			<aside className="col-start-1 col-end-2 row-span-full bg-red-300">
				SIDEBAR
			</aside>
			<main className="overflow-scroll bg-orange-300 p-10">
				<div className="max-w-[120rem] bg-purple-300">MAIN</div>
			</main>
		</div>
	);
}
