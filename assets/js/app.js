$( document ).ready(function(){
    $(".cch-open").lettering();

    $(".cch-open").find("span").filter( ":odd" ).addClass('letters-odd');
    $(".cch-open").find("span").filter( ":even" ).addClass('letters-even');

    document.querySelectorAll('.move-vert').forEach((elem) => {

    	const modifier = elem.getAttribute('data-modifier')
        const from = elem.getAttribute('data-from')
        const to = elem.getAttribute('data-to')

    	basicScroll.create({
    		elem: elem,
            from: from,
            to: to,
    		direct: true,
    		props: {
    			'--yu': {
    				from: '0',
    				to: `${ 1 * modifier }rem`
    			}
    		}
    	}).start()
    });

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
});

document.querySelectorAll('.moneyPiece').forEach((elem) => {

	const modifier = elem.getAttribute('data-modifier')

	basicScroll.create({
		elem: elem,
        from: 'middle-middle',
    	to: 'bottom-top',
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 2.4 * modifier }px`
			}
		}
	}).start()

});


    rotate.start()
    rotateRev.start()
});
