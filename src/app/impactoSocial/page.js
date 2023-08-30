import style from "./impacto.module.css";

export default function ImpactoSocial() {
	return (
		<main
			className={"pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-900 " + style.impacto}
		>
			<div className="flex justify-between px-4 lg:mx-24  ">
				<article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue format-invert">
					<div>
						<h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-white">
							Impacto Social de las Tecnologías
						</h2>
						<p className="mb-4 text-lg font-medium text-white lead">
							Las Tecnologías de la Información (TIC) representan una
							convergencia de computación, telecomunicaciones y procesamiento de
							datos. Incluyen elementos como recursos humanos, infraestructura,
							software y políticas. El impacto de las TIC se plantea como un
							problema global y político, transformando la economía, la sociedad
							y la forma de pensar. Los factores claves son los avances en
							microelectrónica, telecomunicaciones y programas accesibles, lo
							que ha reducido costos y ampliado su uso en diversos sectores.
						</p>

						<p className="mb-4 text-lg font-medium text-white lead">
							Las TIC son un motor del crecimiento económico y social al
							permitir conexiones bidireccionales globales. Sin restricciones de
							tiempo o espacio, estas tecnologías impulsan soluciones entre
							ciudadanos e instituciones. Ejemplos incluyen el acceso a
							conocimiento, educación a distancia, colaboración en investigación
							y telemedicina. Sin embargo, es paradójico que servicios
							lucrativos se prioricen sobre aplicaciones sociales, como el uso
							de satélites para telemedicina en áreas remotas o en desastres
							naturales. Estas tecnologías pueden salvar vidas y mejorar la
							condición humana, pero a menudo enfrentan obstáculos financieros y
							de enfoque.
						</p>
					</div>
					<figure className="mb-8 flex justify-center">
						<img
							className=" rounded-lg"
							src="https://www.iberdrola.com/documents/20125/39787/Tecnologia_Social_746x419.jpg/3e41ffb3-a22c-ff93-ae38-dc66359f20bd?t=1626321074851"
							alt=""
						/>
					</figure>
				</article>
			</div>
		</main>
	);
}
