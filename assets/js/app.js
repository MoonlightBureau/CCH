$( document ).ready(function(){
    $('.cch-open').lettering();
    $('.cch-open').find('span').filter( ':odd' ).addClass('letters-odd');
    $('.cch-open').find('span').filter( ':even' ).addClass('letters-even');


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

    document.querySelectorAll('.letters-odd').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--r': {
        			from: '0',
        			to: '45deg'
        		}
        	}
    	}).start()
    });

    document.querySelectorAll('.letters-even').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--rr': {
        			from: '0',
        			to: '-45deg'
        		}
        	}
    	}).start()
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

//————————————> DEBUG ME

    $('.cch-events').lettering();
    $('.cch-events').find('span').filter( ':odd' ).addClass('events-odd');
    $('.cch-events').find('span').filter( ':even' ).addClass('events-even');
    document.querySelectorAll('.events-odd').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--events-rotate': {
        			from: '0',
        			to: '45deg'
        		}
        	}
    	}).start()
    });

    document.querySelectorAll('.events-even').forEach((elem) => {
    	basicScroll.create({
    		elem: elem,
            from: 'middle-bottom',
        	to: 'bottom-top',
        	props: {
        		'--events-rotate-r': {
        			from: '0',
        			to: '-45deg'
        		}
        	}
    	}).start()
    });

// DEBUG ME <————————————

});
