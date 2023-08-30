import izq from "../../../public/nuevasTecnologiasIzq.jpg";
import der from "../../../public/nuevasTecnologiasDerecha.jpg";
import Image from "next/image";

export default function NuevasTecnologias() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
					<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Nuevas tecnologias en la sociedad del conocimiento
						</h2>
						<p className="mb-4">
							La sociedad del conocimiento aborda cómo el conocimiento se
							relaciona con la ciencia y las sociedades. A lo largo de la
							historia, diferentes enfoques han influido en esta idea, desde la
							experiencia de Aristóteles hasta la razón de Platón y la conexión
							con la fe en la Edad Media. En la época moderna, el positivismo y
							el método científico ganaron importancia, pero el siglo XX cambió
							esto hacia un enfoque histórico-hermenéutico debido a las guerras
							y la escuela de Frankfurt.
						</p>
						<p>
							La noción de sociedad del conocimiento se conecta con estas ideas
							previas. A partir de los años 1960, la transformación de las
							sociedades industriales llevó a repensar cómo se produce el
							conocimiento, especialmente en la era postindustrial con énfasis
							tecnológico y eficiencia. Esto dio lugar al concepto de sociedad
							de la información.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-4 mt-8">
						<Image
							className="w-full rounded-lg"
							src={izq}
							alt="office content 1"
						/>
						<Image
							className="mt-4 w-full lg:mt-10 rounded-lg"
							src={der}
							alt="office content 2"
						/>
					</div>
				</div>
			</section>

			<section className="bg-white dark:bg-gray-900">
				<div className=" items-center py-8 px-4 mx-auto lg:py-16 lg:px-6">
					<div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							TIC en la Educacion de la sociedad del conocimiento
						</h2>
						<p className="mb-4">
							Las Tecnologías de la Información y Comunicación (TIC) están
							transformando la educación y la sociedad, generando cambios
							significativos. Docentes necesitan formación para usar las TIC en
							la enseñanza, mientras que estudiantes demuestran habilidades en
							su uso, pero también existe el riesgo de dependencia y falta de
							crítica. Las TIC pueden mejorar la calidad educativa y el acceso a
							la información.
						</p>
						<p>
							La formación adecuada de docentes es fundamental para integrar
							efectivamente las TIC en la educación. A pesar del potencial, hay
							obstáculos en la implementación, y las políticas educativas deben
							guiar el uso de las TIC. Aunque estas tecnologías pueden
							beneficiar la educación, es esencial prevenir el uso inapropiado y
							enfocarse en mejorar la calidad de la enseñanza a través de
							capacitación y políticas adecuadas.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
