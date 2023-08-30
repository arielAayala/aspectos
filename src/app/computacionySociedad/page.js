import style from "./computacion.module.css";

export default function ComputacionySociedad() {
	return (
		<section className={"bg-gray-900 " + style.computacion}>
			<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
						La computación y la sociedad
					</h2>
					<p className="mb-8 font-light  lg:mb-16 sm:text-xl text-gray-400">
						Las computadoras han tenido un gran impacto para nuestra sociedad
						desde su aparición. Estas se han introducido prácticamente en todos
						los países, tanto en los países desarrollados como en los países en
						vías de desarrollo y en todas las áreas de la sociedad, llegando a
						ocupar un lugar importante en una gran cantidad de hogares.
					</p>
				</div>
				<div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
					<figure className="flex flex-col justify-center items-center p-8 text-center  border-b  md:p-12 lg:border-r bg-gray-800 border-gray-700">
						<blockquote className="mx-auto mb-8 max-w-2xl  text-gray-400">
							<h3 className="text-lg font-semibold  text-white">Negocios</h3>
							<p className="my-4">
								Las aplicaciones para manejo de transacciones son herramientas
								diseñadas para facilitar y gestionar procesos comerciales y
								financieros de manera eficiente. Por otro lado, las aplicaciones
								de productividad personal** automatizan tareas que suelen ser
								consumidoras de tiempo, permitiendo un acceso más eficaz a la
								información y mejorando la eficiencia de las personas. La
								computación en grupo de trabajo combina aspectos de
								productividad personal con aplicaciones de transacciones,
								creando programas que posibilitan que grupos de usuarios
								colaboren en objetivos compartidos, a menudo relacionados con la
								manipulación de documentos.
							</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col justify-center items-center p-8 text-center border-b  md:p-12 bg-gray-800 border-gray-700">
						<blockquote className="mx-auto mb-8 max-w-2xl  text-gray-400">
							<h3 className="text-lg font-semibold  text-white">Medicina</h3>
							<p className="my-4">
								Se usan las computadoras para todo en medicina desde
								diagnósticos de enfermedades hasta el monitoreo de pacientes
								durante cirugía y el control permanente de prótesis. Algunas
								aplicaciones médicas interesantes usan pequeñas computadoras de
								propósito que operan dentro del cuerpo humano para ayudarles a
								funcionar mejor. Ejemplo el implante de cóclea, un aparato
								especial para el oído que permite escuchar a personas con
								marcada deficiencia auditiva.
							</p>
						</blockquote>
					</figure>
					<figure className="flex lg:border-r flex-col justify-center items-center p-8 text-center border-b  md:p-12 bg-gray-800 border-gray-700">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
							<h3 className="text-lg font-semibold text-white">Educación</h3>
							<p className="my-4">
								Las Instituciones educativas están particularmente integradas en
								las computadoras como una herramienta interactiva para el
								aprendizaje. Los programas de educación asistida por
								computadora, pueden solicitar retroalimentación del usuario y
								responder de manera apropiada.
							</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col justify-center items-center p-8 text-center  border-b  md:p-12 bg-gray-800 border-gray-700">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
							<h3 className="text-lg font-semibold text-white">Ciencia</h3>
							<p className="my-4">
								Los científicos utilizan las computadoras para desarrollar
								teorías, recolectar y probar datos y para intercambiar
								electrónicamente información con otros colegas alrededor del
								mundo. También es posible simular eventos complejos con las
								computadoras. Los científicos pueden utilizar potentes
								computadoras para generar estudios detallados de la forma en que
								los sismos afectan a los edificios o la contaminación afecta los
								patrones climáticos.
							</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col lg:border-r justify-center items-center p-8 text-center  border-b  md:p-12 bg-gray-800 border-gray-700">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
							<h3 className="text-lg font-semibold text-white">
								Ingeniería y arquitectura
							</h3>
							<p className="my-4">
								Cuando se diseña un objeto con una computadora, se crea un
								modelo electrónico mediante la descripción de las 3 dimensiones
								del objeto. En papel se tendría que producir dibujos diferentes
								para cada perspectiva, y para modificar el diseño habría que
								volver a dibujar cada perspectiva afectada. La manera de diseñar
								objetos con una computadora se llama diseño asistido por
								computadora.
							</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col justify-center items-center p-8 text-center  border-b  md:p-12 bg-gray-800 border-gray-700">
						<blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
							<h3 className="text-lg font-semibold text-white">Manufactura</h3>
							<p className="my-4">
								La manufactura con integración de computadoras (CIM) ha dado a
								las computadoras un papel adicional en el diseño del producto,
								el pedido de partes y la planeación de la producción de tal
								manera que las computadoras pueden coordinar el proceso completo
								de manufactura.
							</p>
						</blockquote>
					</figure>
					<figure className="flex flex-col justify-center lg:border-r items-center p-8 text-center  border-b  md:p-12 bg-gray-800 border-gray-700">
						<blockquote className="mx-auto mb-8 max-w-2xl  text-gray-400">
							<h3 className="text-lg font-semibold text-white">Astronomía</h3>
							<p className="my-4">
								Puede almacenar imágenes solares, estelares, radiaciones, etc.
								De tal manera que estos datos quedan archivados y así se
								facilita el estudio y posteriormente tanto estadísticos como
								técnicos de las imágenes obtenidas.
							</p>
						</blockquote>
					</figure>
				</div>
			</div>
		</section>
	);
}
