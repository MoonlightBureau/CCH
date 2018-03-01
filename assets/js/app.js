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

const fadeBox = basicScroll.create({
        elem: document.querySelector('.hero-second'),
        from: 'middle-middle',
        to: 'middle-middle',
        inside: (instance, percentage, props) => console.log('fadeBox is animating'),
        outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
        props: {
            '--o': {
                from: .01,
                to: .99
            }
        }
    })

    const fadeBox_rev = basicScroll.create({
            elem: document.querySelector('.hero-second'),
            from: 'middle-middle',
            to: 'middle-middle',
            inside: (instance, percentage, props) => console.log('fadeBox is animating'),
            outside: (instance, percentage, props) => console.log('fadeBox is not animating'),
            props: {
                '--or': {
                    from: .99,
                    to: .01
                }
            }
        })
//
// const colorShift = basicScroll.create({
// 	elem: document.querySelector('.flipflop-blue'),
//     from: 'top-bottom',
// 	to: 'bottom-top',
// 	props: {
// 		'--c': {
// 			from: 'blue',
// 			to: 'green'
// 		}
// 	}
// })

rotate.start()
fadeBox.start()
fadeBox_rev.start()
// colorShift.start()
