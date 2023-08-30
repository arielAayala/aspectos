import style from "./nuevas.module.css";

export default function NuevasTecnologias() {
	return (
		<section className={"bg-gray-900  w-screen h-screen " + style.nuevas}>
			<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
				<div className="font-light  sm:text-lg text-gray-400">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
						Evolución de la sociedad del conocimiento
					</h2>
					<p className="mb-4">
						La sociedad del conocimiento aborda cómo el conocimiento se
						relaciona con la ciencia y las sociedades. A lo largo de la
						historia, diferentes enfoques han influido en esta idea, desde la
						experiencia de Aristóteles hasta la razón de Platón y la conexión
						con la fe en la Edad Media. En la época moderna, el positivismo y el
						método científico ganaron importancia, pero el siglo XX cambió esto
						hacia un enfoque histórico-hermenéutico debido a las guerras y la
						escuela de Frankfurt.
					</p>
					<p>
						La noción de sociedad del conocimiento se conecta con estas ideas
						previas. A partir de los años 1960, la transformación de las
						sociedades industriales llevó a repensar cómo se produce el
						conocimiento, especialmente en la era postindustrial con énfasis
						tecnológico y eficiencia. Esto dio lugar al concepto de sociedad de
						la información.
					</p>
				</div>
			</div>
		</section>
	);
}
