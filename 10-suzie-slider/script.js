
// BUTTONS RELATED WITH PICTURES

$(document).ready(function(){

		function less100() {
			$(".p-more-100").hide();	
			$(".p-less-100").show();	
		};
		
		
		function more100(){
			$(".p-more-100").show();
			$(".p-less-100").hide();	

		};
		
		function all(){
			$(".p-more-100").show();
			$(".p-less-100").show();	

		};
		
		
			$(".b-less-100").click(function(){

				less100();
			});
		
		
			$(".b-more-100").click(function(){

				more100();
			});
		
		
			$(".b-all").click(function(){

				all();
			});

	
		
		
		
	});
	

