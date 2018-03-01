$(document).ready(function() {
    $(".cch-open").lettering();
});

// const instance = basicScroll.create({
// 	elem: document.querySelector('.cch-open span:nth-child(odd)'),
// 	from: 'top-bottom',
// 	to: 'middle-middle',
// 	props: {
// 		'--rotate': {
// 			from: '0',
// 			to: '45deg'
// 		}
// 	}
// })
//
// instance.start()

const instance = basicScroll.create({
	elem: document.querySelector('.cch-open'),
	from: 'top-bottom',
	to: 'top-top',
	props: {
		'--rotate': {
			from: '-45deg',
			to: '45deg'
		}
	}
})

instance.start()
