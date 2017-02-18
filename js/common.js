$(document).ready(function() {
	
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".slider");
	owl.owlCarousel({
		items : 1,
        singleItem:true,
        slideSpeed : 1000,
        paginationSpeed : 1000,
        autoHeight:true,
        pagination : false
        
	});
	
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
///////////////////////////////////////////////////////
    var owl1 = $(".slider1");
	owl1.owlCarousel({
		items : 5,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        slideSpeed : 1000,
        paginationSpeed : 1000,
        autoHeight:false,
        paginationSpeed:800,
        pagination : true,
        paginationNumbers: false
        
	});
	
	
    
/////////////////////////////////////////

	 var owl2 = $(".slider12");
	owl2.owlCarousel({
		items : 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [979,2],
        slideSpeed : 1000,
        paginationSpeed : 1000,
        autoHeight:false,
        paginationSpeed:800,
        pagination : true,
        paginationNumbers: false
        
	});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".top-butt").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

//////////////////


	
	

});