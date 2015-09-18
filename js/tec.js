

// Faz com que a barra inicial faça o efeito de encolher( no inicio esta mais gorda depois encolhe um bocado
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// faz a animação quando toca-se no botao da barra inicial e faz deslizar até a secção pretendida


$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//quando o documento é carregado definir as configurações da galeria


$(document).ready(function() {
		$(".fancybox-button").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none',
			closeBtn		: true,
			helpers		: {
				title	: { type : 'inside' },
				buttons	: {}
			}
		});
		$("#minha-revista").click(function(){
			$(".minha-revista").slideToggle();
		});
	});
