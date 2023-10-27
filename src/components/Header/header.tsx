export function Header(): JSX.Element {
	return (
		<header className="z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
			<nav
				className="relative mx-2 mt-6 w-full max-w-[85rem] rounded-[36px] border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800 md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
				aria-label="Global"
			>
				<div className="flex items-center justify-between">
					<a
						className="flex-none text-xl font-semibold dark:text-white"
						href="#"
						aria-label="Brand"
					>
						Brand
					</a>
					<div className="md:hidden">
						<button
							type="button"
							className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-full border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
							data-hs-collapse="#navbar-collapse-with-animation"
							aria-controls="navbar-collapse-with-animation"
							aria-label="Toggle navigation"
						>
							<svg
								className="h-4 w-4 hs-collapse-open:hidden"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
								/>
							</svg>
							<svg
								className="hidden h-4 w-4 hs-collapse-open:block"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
							</svg>
						</button>
					</div>
				</div>
				<div
					id="navbar-collapse-with-animation"
					className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
				>
					<div className="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:pl-7">
						<a
							className="font-medium text-blue-600 dark:text-blue-500 md:py-6"
							href="#"
							aria-current="page"
						>
							Landing
						</a>
						<a
							className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 md:py-6"
							href="#"
						>
							Account
						</a>
						<a
							className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 md:py-6"
							href="#"
						>
							Work
						</a>
						<a
							className="font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 md:py-6"
							href="#"
						>
							Blog
						</a>

						<div className="hs-dropdown [--adaptive:none] [--strategy:static] md:py-4 md:[--strategy:fixed] md:[--trigger:hover]">
							<button
								type="button"
								className="flex w-full items-center font-medium text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 "
							>
								Dropdown
								<svg
									className="ml-2 h-2.5 w-2.5 text-gray-600"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									></path>
								</svg>
							</button>

							<div className="hs-dropdown-menu top-full z-10 hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:left-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 md:w-48 md:border md:shadow-md md:duration-[150ms] md:dark:border">
								<a
									className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									href="#"
								>
									About
								</a>
								<div className="hs-dropdown relative [--adaptive:none] [--strategy:static] md:[--trigger:hover] md:[--strategy:absolute]">
									<button
										type="button"
										className="flex w-full w-full items-center justify-between rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									>
										Sub Menu
										<svg
											className="ml-2 h-2.5 w-2.5 text-gray-600 md:-rotate-90"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
											></path>
										</svg>
									</button>

									<div className="hs-dropdown-menu right-full top-0 z-10 !mx-[10px] hidden rounded-lg bg-white p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-right-5 before:top-0 before:h-full before:w-5 hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 md:mt-2 md:w-48 md:border md:shadow-md md:duration-[150ms] md:dark:border">
										<a
											className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											href="#"
										>
											About
										</a>
										<a
											className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											href="#"
										>
											Downloads
										</a>
										<a
											className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
											href="#"
										>
											Team Account
										</a>
									</div>
								</div>

								<a
									className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									href="#"
								>
									Downloads
								</a>
								<a
									className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
									href="#"
								>
									Team Account
								</a>
							</div>
						</div>

						<a
							className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 md:my-6 md:border-l md:border-gray-300 md:pl-6"
							href="#"
						>
							<svg
								className="h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
							</svg>
							Log in
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
}
