  /* SLIDER */
  new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    breakpoints: {
		640: {
			perPage: 1,
		},
	},  
    perMove: 1,
  } ).mount();
  


