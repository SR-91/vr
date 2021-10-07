jQuery('.nOne').mouseover(function() {
    jQuery('.nOne').addClass("active");
    jQuery('.nOneW').addClass("show");
	
	
	jQuery('.nTwo').removeClass("active");
    jQuery('.nTwoW').removeClass("show");
	jQuery('.nThree').removeClass("active");
    jQuery('.nThreeW').removeClass("show");
	jQuery('.nFour').removeClass("active");
    jQuery('.nFourW').removeClass("show");
	
});

jQuery('.nTwo').mouseover(function() {
    jQuery('.nTwo').addClass("active");
    jQuery('.nTwoW').addClass("show");
	
	jQuery('.nOne').removeClass("active");
    jQuery('.nOneW').removeClass("show");
	jQuery('.nThree').removeClass("active");
    jQuery('.nThreeW').removeClass("show");
	jQuery('.nFour').removeClass("active");
    jQuery('.nFourW').removeClass("show");
	
});

jQuery('.nThree').mouseover(function() {
    jQuery('.nThree').addClass("active");
    jQuery('.nThreeW').addClass("show");
	
	jQuery('.nOne').removeClass("active");
    jQuery('.nOneW').removeClass("show");
	jQuery('.nTwo').removeClass("active");
    jQuery('.nTwoW').removeClass("show");
	jQuery('.nFour').removeClass("active");
    jQuery('.nFourW').removeClass("show");
	
});

jQuery('.nFour').mouseover(function() {
    jQuery('.nFour').addClass("active");
    jQuery('.nFourW').addClass("show");
	
    jQuery('.nOne').removeClass("active");
    jQuery('.nOneW').removeClass("show");
	jQuery('.nTwo').removeClass("active");
    jQuery('.nTwoW').removeClass("show");
	jQuery('.nThree').removeClass("active");
    jQuery('.nThreeW').removeClass("show");	
	
});

jQuery('.navbar-brand').mouseover(function() {

    jQuery('.nFour').removeClass("active");
    jQuery('.nFourW').removeClass("show");
    jQuery('.nOne').removeClass("active");
    jQuery('.nOneW').removeClass("show");
	jQuery('.nTwo').removeClass("active");
    jQuery('.nTwoW').removeClass("show");
	jQuery('.nThree').removeClass("active");
    jQuery('.nThreeW').removeClass("show");	

});


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = '0'
  const target = +counter.getAttribute('data-target');
  const interval = target / 100;
   
  const updateCounter = () => {
    const value = +counter.innerText;
    if (value < target) {
      counter.innerText = Math.ceil(value + interval);
      
      setTimeout(() => {
        updateCounter()
      }, 20);
    }
  }

  updateCounter();
 
});
