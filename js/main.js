$(function(){
	//loadimg...
	$(window).load(function(){
		//讀取完後關閉load
		$("#loading").fadeOut(500);

		//開啟地圖&關閉地圖
		var mapOffOn = false;
		$("#mapOpen").click(function(){
			if(mapOffOn==false){
				var width = $("#main").innerWidth();
				if (width == 1280) {
					$("#mapPic").animate({"bottom":"32px"},500,"easeOutBack");
				}else{
					$("#mapPic").fadeIn(500);
				}
				mapOffOn=true;
			}else{
				var width = $("#main").innerWidth();
				if (width == 1280) {
					$("#mapPic").animate({"bottom":"-315px"},300);
				}else{
					$("#mapPic").fadeOut(500);
				}
				mapOffOn=false;
			}
		});
		//關閉地圖
		$("#mapPic").click(function(){
			var width = $("#main").innerWidth();
			if (width == 1280) {
				$("#mapPic").animate({"bottom":"-315px"},300);
			}else{
				$("#mapPic").fadeOut(500);
			}
			mapOffOn=false;
		});
		

		//PC滑入按鈕
		for (var i = 1; i <= 4; i++) {
	        document.getElementById('btn' + i).nowID = i;
	        document.getElementById('btn' + i).addEventListener("mouseenter", onOverBtn);
	        document.getElementById('btn' + i).addEventListener("mouseleave", onOutBtn);
	    }
	    function onClickBtn() {
	       
	    }
	    function onOverBtn() {
	        $('#s' + this.id).stop(true).slideDown(500);

	    }
	    function onOutBtn() {
	        $('#s' + this.id).stop(true).slideUp(300);
	    }
		

		//Phone時的Menu打開關閉 + Phone的Menu的子選單開關
		var smallBtnOpen = false;
	    $("#smallBtn").click(function () {
	        if (smallBtnOpen == false) {
	            $("#smallMenu").stop(true).animate({right:"0%"},500);
	            $("section").animate({left:"-85%"},500);
	            smallBtnOpen = true;
	            $("#smallBtnLine1").css({"transform":"rotate(45deg)","top":"20px","background-color":"#b0a800"});
				$("#smallBtnLine2").css({"display":"none"});
				$("#smallBtnLine3").css({"transform":"rotate(-45deg)","top":"20px","background-color":"#b0a800"});
	        } else {
	            $("#smallMenu").stop(true).animate({right:"-85%"},300);
	            $("section").animate({left:"0%"},300);
	            smallBtnOpen = false;
	            $("#smallBtnLine1").css({"transform":"rotate(0deg)","top":"12px","background-color":"#fff"});
				$("#smallBtnLine2").css({"display":"block"});
				$("#smallBtnLine3").css({"transform":"rotate(0deg)","top":"28px","background-color":"#fff"});
	        }
	        for (var i = 1; i <= 4; i++) {
	            $("#smallbtn" + i + " ul").slideUp(500);
	        }
	    });
	    $(".smallbtn").click(function () {
	        num = $(this).attr("id").charAt(8);
	        for (var i = 1; i <= 4; i++) {
	            if (num != i) {
	            	$("#smallbtn" + i + " ul").slideUp(500);
	            }
	        }
	        $("#smallbtn" + num + " ul").slideToggle(500);
		});

		//Phone的menu要不要隱藏，pc版時隱藏;手機板時開啟
		var width = $("#main").innerWidth();
		if (width == 1280) {
			$("#smallMenu").hide();
		}else{
			$("#smallMenu").show();
		}

		var sectionSpace = $("section").innerHeight();
		$(".sectionSpace").css({"height":sectionSpace});

		var spaceSizeTime=0;
		function spaceSize(){
			var sectionSpace = $("section").innerHeight();
			$(".sectionSpace").css({"height":sectionSpace});
			spaceSizeTime=setTimeout(spaceSize,300);
			// console.log("spaceSizeTime",spaceSizeTime);
			if(spaceSizeTime>=10){
				clearTimeout(spaceSizeTime);
			}
		}
		spaceSize();




		//PCMenuLink
		$("#menuLogo").click(function(){
			window.location.href="index.html";
		});
		$("#btn1-1").click(function(){
			window.location.href="traffic1.html";
		});
		$("#btn1-2").click(function(){
			window.location.href="traffic2.html";
		});
		$("#btn1-3").click(function(){
			window.location.href="traffic3.html";
		});
		$("#btn2-1").click(function(){
			window.location.href="building1.html";
		});
		$("#btn2-2").click(function(){
			window.location.href="building2.html";
		});
		$("#btn2-3").click(function(){
			window.location.href="building3.html";
		});
		$("#btn2-4").click(function(){
			window.location.href="building4.html";
		});
		//$("#btn3-1").click(function(){
		//	window.location.href="humanity1.html";
		//});
		$("#btn3-2").click(function(){
			window.location.href="space2.html";
		});
		$("#btn3-3").click(function(){
			window.location.href="space3.html";
		});
		$("#btn4").click(function(){
			window.location.href="reservation.html";
		});
		



		//PhoneMenuLink
		$("#smallbtn1-1").click(function(){
			window.location.href="traffic1.html";
		});
		$("#smallbtn1-2").click(function(){
			window.location.href="traffic2.html";
		});
		$("#smallbtn1-3").click(function(){
			window.location.href="traffic3.html";
		});
		$("#smallbtn2-1").click(function(){
			window.location.href="building1.html";
		});
		$("#smallbtn2-2").click(function(){
			window.location.href="building2.html";
		});
		$("#smallbtn2-3").click(function(){
			window.location.href="building3.html";
		});
		$("#smallbtn2-4").click(function(){
			window.location.href="building4.html";
		});
		//$("#smallbtn3-1").click(function(){
		//	window.location.href="humanity1.html";
		//});
		$("#smallbtn3-2").click(function(){
			window.location.href="space2.html";
		});
		$("#smallbtn3-3").click(function(){
			window.location.href="space3.html";
		});
		$("#smallbtn4").click(function(){
			window.location.href="reservation.html";
		});
		

	});	

});

$(window).resize(function(){
	var sectionSpace = $("section").innerHeight();
	$(".sectionSpace").css({"height":sectionSpace});
});