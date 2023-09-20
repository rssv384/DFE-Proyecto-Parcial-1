// Funcionalidad botón flotante
document.addEventListener('DOMContentLoaded', () => {
	const scrollToTopButton = document.getElementById('btn-ir-arriba');
	scrollToTopButton.style.display = 'none';
	window.addEventListener('scroll', () => {
		if (window.scrollY > 10) {
			scrollToTopButton.style.display = 'block';
		} else {
			scrollToTopButton.style.display = 'none';
		}
	});

	scrollToTopButton.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
});
