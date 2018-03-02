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

// const fadeBox = basicScroll.create({
//         elem: document.querySelector('.hero-second'),
//         from: 'middle-middle',
//         to: 'middle-middle',
//         inside: (instance, percentage, props) => console.log('fadeBox is animating'),
//         outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
//         props: {
//             '--o': {
//                 from: .01,
//                 to: .99
//             }
//         }
//     })
//
//     const fadeBox_rev = basicScroll.create({
//             elem: document.querySelector('.hero-second'),
//             from: 'middle-middle',
//             to: 'middle-middle',
//             inside: (instance, percentage, props) => console.log('fadeBox is animating'),
//             outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
//             props: {
//                 '--or': {
//                     from: .99,
//                     to: .01
//                 }
//             }
//         })

rotate.start()
// fadeBox.start()
// fadeBox_rev.start()
