"use client";
import React from "react";

function Bienvenida() {
	const scrollToTemasDesarrollados = () => {
		const element = document.getElementById("Bienvenida");

		const height = element.offsetHeight;

		window.scroll({
			top: height,
			behavior: "smooth",
		});
	};

	return (
		<section
			id="Bienvenida"
			className="flex flex-col bg-center h-screen bg-cover bg-no-repeat bg-[url('https://blog.nuoplanet.com/hubfs/Blog/biometria_la_ultima_tecnologia.jpg')] bg-black bg-blend-soft-screen"
		>
			<div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
				<h1 className="mb-4 text-4xl  font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
					Computación y Sociedad
				</h1>
				<p className=" text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
					En este trabajo desarrollamos conceptos primordiales sobre el impacto
					social de la informática en la sociedad, las nuevas tecnologías del
					conocimiento y la computación.
				</p>
			</div>
			<div className="flex flex-1  flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 ">
				<a
					onClick={scrollToTemasDesarrollados}
					className="inline-flex w-max m-auto justify-center items-center py-3 px-5 text-lg font-medium text-center text-black rounded-lg bg-gray-50  hover:bg-gray-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
				>
					Ver más
				</a>
			</div>
		</section>
	);
}

export default Bienvenida;
