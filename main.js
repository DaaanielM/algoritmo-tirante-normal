const formulario = document.querySelector('#formulario');

//crear el evento
formulario.addEventListener('submit', validarFormulario);

//funcion
function validarFormulario(e) {
	e.preventDefault();
	let z = parseFloat(document.getElementById('z').value);
	let s = parseFloat(document.getElementById('s').value);
	let n = parseFloat(document.getElementById('n').value);
	let q = parseFloat(document.getElementById('q').value);
	let b = parseFloat(document.getElementById('b').value);
	let semilla = parseFloat(document.getElementById('semilla').value);
	for (i = 1; i <= 100; i++) {
		const x1 = ((q * n) / s ** 0.5) ** 0.6;
		const x2 = (b + 2 * semilla * Math.sqrt(1 + z * z)) ** 0.4;
		const x3 = b + z * semilla;
		const yn = (x1 * x2) / x3;

		const error = Math.abs(yn - semilla);
		if (semilla) {
			semilla = yn;
		}

		if (error < 0.0001) {
			// document.write(
			// 	`${i}. El valor del tirante normal (yn) es: ${yn.toFixed(
			// 		6
			// 	)} m. `
			// );

			// document.write(`El error es: ${error.toFixed(6)} m. `);
			let area = (b + z * yn) * yn;
			let v = q / area;

			const resultado = document.getElementById('resultado');
			const resultado2 = document.getElementById('resultado2');
			const resultado3 = document.getElementById('resultado3');
			const resultado4 = document.getElementById('resultado4');

			resultado.textContent = `${i}. El tirante normal (yn) es: ${yn.toFixed(
				6
			)} m. `;
			resultado2.textContent = `El error es: ${error.toFixed(6)} m. `;
			resultado3.textContent = `El area es: ${area.toFixed(3)} m2. `;
			resultado4.textContent = `La velocidad es: ${v.toFixed(3)} m/s. `;
			break;
		}
	}
}

// let z = parseFloat(1); //talud
// let s = parseFloat(0.004); //pendiente
// let n = parseFloat(0.02); //manning
// let q = parseFloat(4); //caudal
// let b = parseFloat(3.69); //base del canal
// let semilla = parseFloat(0.1); //semilla

//
