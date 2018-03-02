$(document).ready(function() {
    $(".cch-open").lettering();
});


const rotate = basicScroll.create({
	elem: document.querySelector('.cch-open'),
	from: 'top-bottom',
	to: 'bottom-top',
	props: {
		'--r': {
			from: '-45deg',
			to: '45deg'
		}
	}
})

const moveUp = basicScroll.create({
	elem: document.querySelector('.move-up'),
	from: 'top-top',
	to: 'bottom-top',
	props: {
		'--yu': {
			from: '0',
			to: '20rem'
		}
	}
})

rotate.start()
moveUp.start()
