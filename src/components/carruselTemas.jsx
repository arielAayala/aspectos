import React from "react";

function CarruselTemas() {
	return (
		<div className="flex flex-col h-screen">
			<h2 className=" font-bold text-4xl p-10">Temas Desarrollados</h2>
			<div className="flex flex-wrap p-10 justify-center">
				<div className="h-max bg-white border m-10 border-gray-200 rounded-lg shadow max-w-sm ">
					<a href="#">
						<img
							className="rounded-t-lg"
							src=""
							alt=""
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								Nuevas tecnologías en la sociedad del conocimiento
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href="#"
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Read more
						</a>
					</div>
				</div>
				<div className="h-max bg-white border m-10 border-gray-200 rounded-lg shadow max-w-sm">
					<a href="#">
						<img
							className="rounded-t-lg"
							src=""
							alt=""
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								La computación y la sociedad
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href="#"
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Read more
						</a>
					</div>
				</div>
				<div className="h-max bg-white border m-10 border-gray-200 rounded-lg shadow max-w-sm">
					<a href="#">
						<img
							className="rounded-t-lg"
							src=""
							alt=""
						/>
					</a>
					<div className="p-5">
						<a href="#">
							<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								El impacto social de la informática en la sociedad
							</h5>
						</a>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest enterprise technology acquisitions of 2021 so
							far, in reverse chronological order.
						</p>
						<a
							href="#"
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Read more
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarruselTemas;
