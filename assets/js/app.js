$( document ).ready(function(){
    $(".cch-open").lettering();

    $(".cch-open").find("span").filter( ":odd" ).addClass('letters-odd');
    $(".cch-open").find("span").filter( ":even" ).addClass('letters-even');

    const moveUp = basicScroll.create({
    	elem: document.querySelector('.move-up'),
    	from: 'top-top',
    	to: 'bottom-top',
    	props: {
    		'--yu': {
    			from: '0',
    			to: '15rem'
    		}
    	}
    }, 3000);

const rotate = basicScroll.create({
	elem: document.querySelector('.letters-odd'),
	from: 'middle-bottom',
	to: 'bottom-top',
	props: {
		'--r': {
			from: '0',
			to: '45deg'
		}
	}
})

const rotateRev = basicScroll.create({
	elem: document.querySelector('.letters-even'),
	from: 'middle-bottom',
	to: 'bottom-top',
	props: {
		'--rr': {
			from: '0',
			to: '-45deg'
		}
	}
})

document.querySelectorAll('.moneyPiece').forEach((elem) => {

	const modifier = elem.getAttribute('data-modifier')

	basicScroll.create({
		elem: elem,
        from: 'top-middle',
    	to: 'top-top',
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 2.2 * modifier }px`
			}
		}
	}).start()

})


    rotate.start()
    rotateRev.start()
    moveUp.start()
});
