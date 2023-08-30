import React from "react";
import Link from "next/link";

function CarruselTemas() {
	return (
		<div className="flex flex-col h-screen">
			<h2 className=" font-bold text-4xl p-10">Temas Desarrollados</h2>
			<div className="flex flex-wrap p-10 justify-center">
				<div className=" h-50 bg-white border m-2 my-5  border-gray-200 rounded-lg shadow max-w-sm ">
					<img
						className="rounded-t-lg"
						src="https://d5tnfl9agh5vb.cloudfront.net/uploads/2016/07/upn_blog_com_era-digital-sociedad-conocimiento_21jul.jpg"
						alt=""
					/>

					<div className="p-5">
						<h5 className="mb-2 h-30 lg:h-20 text-2xl text-center font-bold tracking-tight text-gray-900 ">
							Nuevas tecnologías en la sociedad del conocimiento
						</h5>

						<p className=" h-40 font-normal text-gray-700 text-justify">
							En la evolución hacia la sociedad del conocimiento, las
							Tecnologías de la Información y Comunicación han revolucionado la
							educación y el aprendizaje.
						</p>
						<Link
							href="/nuevasTecnologias"
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Ver detalles
						</Link>
					</div>
				</div>
				<div className=" h-50 bg-white border m-2 my-5 border-gray-200 rounded-lg shadow max-w-sm">
					<img
						className="rounded-t-lg"
						src="https://1.bp.blogspot.com/-lbgJ0eym4I8/W--dUb15hFI/AAAAAAAABk8/vfeo4qhnUxA7n0EtvyvGs9lgvF7jtFABACLcBGAs/s1600/7541_1.jpg"
						alt=""
					/>

					<div className="p-5">
						<h5 className="mb-2 h-30 lg:h-20 text-2xl font-bold tracking-tight text-center text-gray-900 ">
							La computación y la sociedad
						</h5>

						<p className=" h-40 font-normal text-gray-700 text-justify">
							Las computadoras son una herramienta omnipresente en las mayorias
							de las áreas. Influyendo en nuevas profesiones y optimizando
							procesos en múltiples sectores.
						</p>
						<Link
							href="computacionySociedad"
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Ver detalles
						</Link>
					</div>
				</div>
				<div className=" h-50 bg-white border m-2 my-5 border-gray-200 rounded-lg shadow max-w-sm">
					<img
						className="rounded-t-lg"
						src="https://itgoya.gob.ar/wp-content/uploads/2020/08/banner_administracion.jpeg"
						alt=""
					/>

					<div className="p-5">
						<h5 className="mb-2 h-30 lg:h-20 text-2xl font-bold text-center tracking-tight text-gray-900 ">
							El impacto social de la informática en la sociedad
						</h5>

						<p className=" h-40 font-normal text-justify  text-gray-700 ">
							La informática ha transformado la sociedad, revolucionando la
							economía, cultura, educación. Aunque plantea desafíos éticos y de
							control.
						</p>
						<Link
							href="/impactoSocial"
							className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Ver detalles
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarruselTemas;
