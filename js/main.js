
$(document).ready(function(){
    //PRODUCT VIEW	//product img slider
    $('.about-wrap-cont').slick({
        infinite: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // asNavFor: '.slider-imgs',
        arrows: false
    });

    //Location Tool Tip
    tippy('.loc-4', {
        content:"MEXICO",
    });

    tippy('.loc-5', {
        content: "LONDON2",
    });

    tippy('.loc-6', {
        content: "LONDON(HQ)",
    });

    tippy('.loc-7', {
        content: "DENMARK",
    });

    tippy('.loc-8', {
        content: "POLAND",
    });

    tippy('.loc-9', {
        content: "JORDAN",
    });

    tippy('.loc-10', {
        content: "MYANMAR",
    });
});