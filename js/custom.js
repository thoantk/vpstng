$(function() {
    "use strict";    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));
    $(document).ready(function(){ 
    // Multiselect
        if($('.multiselect').length>0){
            $('.multiselect').multiselect({
                maxHeight: 300,enableFiltering: true,
            });
        }
        $('.single-selection').multiselect({
            maxHeight: 300, enableFiltering: true,
        });
        $('.btn-close').on('click', function() {
		    $('body').removeClass('offcanvas-right');
	    });
        $('.filterbutton').on('click', function() {
		    $('body').addClass('offcanvas-right');
	    });
        $('.toogle-sidebar').on('click', function() {
		    $('body').toggleClass('hidden-sidebar');
	    });
    })
})    