function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Adega Papito',
			text: 'Compartilhe nossas redes com seus amigos',
			url: 'https://devguu.github.io/AdegaPapito/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}