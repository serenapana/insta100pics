
// BUTTONS RELATED WITH PICTURES, I am not using those at the moment

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
	

		// function to output the value of the slider
	function outputUpdate(vol) {
		document.querySelector('#output').value = vol;
		
		if(vol >= 0 && vol <= 1934.4){
			
			
			document.getElementById('000788').style.display = "inline";
			document.getElementById('000928').style.display = "inline";
			document.getElementById('001063').style.display = "inline";
			document.getElementById('001184').style.display = "inline";
			document.getElementById('001242').style.display = "inline";
			
			document.getElementById('001242').style.display = "inline";
			document.getElementById('001295').style.display = "inline";
			document.getElementById('001341').style.display = "inline";
			document.getElementById('001362').style.display = "inline";
			document.getElementById('001362-2').style.display = "inline";
			
			document.getElementById('001371').style.display = "inline";
			document.getElementById('001383').style.display = "inline";
			document.getElementById('001398').style.display = "inline";
			document.getElementById('001424').style.display = "inline";
			document.getElementById('001450').style.display = "inline";
			
			document.getElementById('001461').style.display = "inline";
			document.getElementById('001487').style.display = "inline";
			document.getElementById('001500').style.display = "inline";
			document.getElementById('001526').style.display = "inline";
			document.getElementById('001589').style.display = "inline";
			
			document.getElementById('001639').style.display = "inline";
			document.getElementById('001641').style.display = "inline";
			document.getElementById('001654').style.display = "inline";
			document.getElementById('001662').style.display = "inline";
			document.getElementById('001680').style.display = "inline";
			
			document.getElementById('001789').style.display = "inline";
			document.getElementById('001808').style.display = "inline";
			document.getElementById('001883').style.display = "inline";
			document.getElementById('001885').style.display = "inline";
			document.getElementById('001954').style.display = "inline";
			
			document.getElementById('001998').style.display = "inline";
			document.getElementById('002026').style.display = "inline";
			document.getElementById('002033').style.display = "inline";
			document.getElementById('002061').style.display = "inline";
			document.getElementById('002081').style.display = "inline";
			
			document.getElementById('002135').style.display = "inline";
			document.getElementById('002290').style.display = "inline";
			document.getElementById('002384').style.display = "inline";
			document.getElementById('002403').style.display = "inline";
			document.getElementById('002456-2').style.display = "inline";
			
			document.getElementById('002456').style.display = "inline";
			document.getElementById('002459').style.display = "inline";
			document.getElementById('002481').style.display = "inline";
			document.getElementById('002520').style.display = "inline";
			document.getElementById('002553').style.display = "inline";
			
			document.getElementById('002622').style.display = "inline";
			document.getElementById('002642').style.display = "inline";
			document.getElementById('002650').style.display = "inline";
			document.getElementById('002709').style.display = "inline";
			document.getElementById('002877').style.display = "inline";
			
			document.getElementById('002892').style.display = "inline";
			document.getElementById('002897').style.display = "inline";
			document.getElementById('002955').style.display = "inline";
			document.getElementById('003007').style.display = "inline";
			document.getElementById('003071').style.display = "inline";
			
			document.getElementById('003168').style.display = "inline";
			document.getElementById('003214').style.display = "inline";
			document.getElementById('003238').style.display = "inline";
			document.getElementById('003296').style.display = "inline";
			document.getElementById('003385').style.display = "inline";
			
			document.getElementById('003398').style.display = "inline";
			document.getElementById('003420').style.display = "inline";
			document.getElementById('003475').style.display = "inline";
			document.getElementById('003553').style.display = "inline";
			document.getElementById('003658').style.display = "inline";
			
			document.getElementById('003927').style.display = "inline";
			document.getElementById('003965').style.display = "inline";
			document.getElementById('003969').style.display = "inline";
			document.getElementById('004252').style.display = "inline";
			document.getElementById('004579').style.display = "inline";
			
			document.getElementById('004753').style.display = "inline";
			document.getElementById('004872').style.display = "inline";
			document.getElementById('004885').style.display = "inline";
			document.getElementById('004938').style.display = "inline";
			document.getElementById('004975').style.display = "inline";
			
			document.getElementById('004988-2').style.display = "inline";
			document.getElementById('004988').style.display = "inline";
			document.getElementById('005082').style.display = "inline";
			document.getElementById('005195').style.display = "inline";
			document.getElementById('005215').style.display = "inline";
			
			document.getElementById('005727').style.display = "inline";
			document.getElementById('005781').style.display = "inline";
			document.getElementById('005971').style.display = "inline";
			document.getElementById('006158').style.display = "inline";
			document.getElementById('006302').style.display = "inline";
			
			document.getElementById('007385').style.display = "inline";
			document.getElementById('007465').style.display = "inline";
			document.getElementById('007900').style.display = "inline";
			document.getElementById('008601').style.display = "inline";
			document.getElementById('009152').style.display = "inline";
			
			document.getElementById('009155').style.display = "inline";
			document.getElementById('019344').style.display = "inline";
			

			
			
		}else if (vol > 1934.4 && vol <= 3868.8){
			
			
			document.getElementById('000788').style.display = "none";
			document.getElementById('000928').style.display = "none";
			document.getElementById('001063').style.display = "none";
			document.getElementById('001184').style.display = "none";
			document.getElementById('001242').style.display = "none";
			
			document.getElementById('001242').style.display = "none";
			document.getElementById('001295').style.display = "none";
			document.getElementById('001341').style.display = "none";
			document.getElementById('001362').style.display = "none";
			document.getElementById('001362-2').style.display = "none";
			
			document.getElementById('001371').style.display = "none";
			document.getElementById('001383').style.display = "none";
			document.getElementById('001398').style.display = "none";
			document.getElementById('001424').style.display = "none";
			document.getElementById('001450').style.display = "none";
			
			document.getElementById('001461').style.display = "none";
			document.getElementById('001487').style.display = "none";
			document.getElementById('001500').style.display = "none";
			document.getElementById('001526').style.display = "none";
			document.getElementById('001589').style.display = "none";
			
			document.getElementById('001639').style.display = "none";
			document.getElementById('001641').style.display = "none";
			document.getElementById('001654').style.display = "none";
			document.getElementById('001662').style.display = "none";
			document.getElementById('001680').style.display = "none";
			
			document.getElementById('001789').style.display = "none";
			document.getElementById('001808').style.display = "none";
			document.getElementById('001883').style.display = "none";
			document.getElementById('001885').style.display = "none";
			document.getElementById('001954').style.display = "none";
			
			document.getElementById('001998').style.display = "none";
			document.getElementById('002026').style.display = "none";
			document.getElementById('002033').style.display = "none";
			document.getElementById('002061').style.display = "none";
			document.getElementById('002081').style.display = "none";
			
			document.getElementById('002135').style.display = "none";
			document.getElementById('002290').style.display = "none";
			document.getElementById('002384').style.display = "none";
			document.getElementById('002403').style.display = "none";
			document.getElementById('002456-2').style.display = "none";
			
			document.getElementById('002456').style.display = "none";
			document.getElementById('002459').style.display = "none";
			document.getElementById('002481').style.display = "none";
			document.getElementById('002520').style.display = "none";
			document.getElementById('002553').style.display = "none";
			
			document.getElementById('002622').style.display = "none";
			document.getElementById('002642').style.display = "none";
			document.getElementById('002650').style.display = "none";
			document.getElementById('002709').style.display = "none";
			document.getElementById('002877').style.display = "none";
			
			document.getElementById('002892').style.display = "none";
			document.getElementById('002897').style.display = "none";
			document.getElementById('002955').style.display = "none";
			document.getElementById('003007').style.display = "none";
			document.getElementById('003071').style.display = "none";
			
			document.getElementById('003168').style.display = "none";
			document.getElementById('003214').style.display = "none";
			document.getElementById('003238').style.display = "none";
			document.getElementById('003296').style.display = "none";
			document.getElementById('003385').style.display = "none";
			
			document.getElementById('003398').style.display = "none";
			document.getElementById('003420').style.display = "none";
			document.getElementById('003475').style.display = "none";
			document.getElementById('003553').style.display = "none";
			document.getElementById('003658').style.display = "none";
			
			document.getElementById('003927').style.display = "inline";
			document.getElementById('003965').style.display = "inline";
			document.getElementById('003969').style.display = "inline";
			document.getElementById('004252').style.display = "inline";
			document.getElementById('004579').style.display = "inline";
			
			document.getElementById('004753').style.display = "inline";
			document.getElementById('004872').style.display = "inline";
			document.getElementById('004885').style.display = "inline";
			document.getElementById('004938').style.display = "inline";
			document.getElementById('004975').style.display = "inline";
			
			document.getElementById('004988-2').style.display = "inline";
			document.getElementById('004988').style.display = "inline";
			document.getElementById('005082').style.display = "inline";
			document.getElementById('005195').style.display = "inline";
			document.getElementById('005215').style.display = "inline";
			
			document.getElementById('005727').style.display = "inline";
			document.getElementById('005781').style.display = "inline";
			document.getElementById('005971').style.display = "inline";
			document.getElementById('006158').style.display = "inline";
			document.getElementById('006302').style.display = "inline";
			
			document.getElementById('007385').style.display = "inline";
			document.getElementById('007465').style.display = "inline";
			document.getElementById('007900').style.display = "inline";
			document.getElementById('008601').style.display = "inline";
			document.getElementById('009152').style.display = "inline";
			
			document.getElementById('009155').style.display = "inline";
			document.getElementById('019344').style.display = "inline";

		
		}else if(vol > 3868.8 && vol <= 5803.2){
			
			
			document.getElementById('000788').style.display = "none";
			document.getElementById('000928').style.display = "none";
			document.getElementById('001063').style.display = "none";
			document.getElementById('001184').style.display = "none";
			document.getElementById('001242').style.display = "none";
			
			document.getElementById('001242').style.display = "none";
			document.getElementById('001295').style.display = "none";
			document.getElementById('001341').style.display = "none";
			document.getElementById('001362').style.display = "none";
			document.getElementById('001362-2').style.display = "none";
			
			document.getElementById('001371').style.display = "none";
			document.getElementById('001383').style.display = "none";
			document.getElementById('001398').style.display = "none";
			document.getElementById('001424').style.display = "none";
			document.getElementById('001450').style.display = "none";
			
			document.getElementById('001461').style.display = "none";
			document.getElementById('001487').style.display = "none";
			document.getElementById('001500').style.display = "none";
			document.getElementById('001526').style.display = "none";
			document.getElementById('001589').style.display = "none";
			
			document.getElementById('001639').style.display = "none";
			document.getElementById('001641').style.display = "none";
			document.getElementById('001654').style.display = "none";
			document.getElementById('001662').style.display = "none";
			document.getElementById('001680').style.display = "none";
			
			document.getElementById('001789').style.display = "none";
			document.getElementById('001808').style.display = "none";
			document.getElementById('001883').style.display = "none";
			document.getElementById('001885').style.display = "none";
			document.getElementById('001954').style.display = "none";
			
			document.getElementById('001998').style.display = "none";
			document.getElementById('002026').style.display = "none";
			document.getElementById('002033').style.display = "none";
			document.getElementById('002061').style.display = "none";
			document.getElementById('002081').style.display = "none";
			
			document.getElementById('002135').style.display = "none";
			document.getElementById('002290').style.display = "none";
			document.getElementById('002384').style.display = "none";
			document.getElementById('002403').style.display = "none";
			document.getElementById('002456-2').style.display = "none";
			
			document.getElementById('002456').style.display = "none";
			document.getElementById('002459').style.display = "none";
			document.getElementById('002481').style.display = "none";
			document.getElementById('002520').style.display = "none";
			document.getElementById('002553').style.display = "none";
			
			document.getElementById('002622').style.display = "none";
			document.getElementById('002642').style.display = "none";
			document.getElementById('002650').style.display = "none";
			document.getElementById('002709').style.display = "none";
			document.getElementById('002877').style.display = "none";
			
			document.getElementById('002892').style.display = "none";
			document.getElementById('002897').style.display = "none";
			document.getElementById('002955').style.display = "none";
			document.getElementById('003007').style.display = "none";
			document.getElementById('003071').style.display = "none";
			
			document.getElementById('003168').style.display = "none";
			document.getElementById('003214').style.display = "none";
			document.getElementById('003238').style.display = "none";
			document.getElementById('003296').style.display = "none";
			document.getElementById('003385').style.display = "none";
			
			document.getElementById('003398').style.display = "none";
			document.getElementById('003420').style.display = "none";
			document.getElementById('003475').style.display = "none";
			document.getElementById('003553').style.display = "none";
			document.getElementById('003658').style.display = "none";
			
			document.getElementById('003927').style.display = "none";
			document.getElementById('003965').style.display = "none";
			document.getElementById('003969').style.display = "none";
			document.getElementById('004252').style.display = "none";
			document.getElementById('004579').style.display = "none";
			
			document.getElementById('004753').style.display = "none";
			document.getElementById('004872').style.display = "none";
			document.getElementById('004885').style.display = "none";
			document.getElementById('004938').style.display = "none";
			document.getElementById('004975').style.display = "none";
			
			document.getElementById('004988-2').style.display = "none";
			document.getElementById('004988').style.display = "none";
			document.getElementById('005082').style.display = "none";
			document.getElementById('005195').style.display = "none";
			document.getElementById('005215').style.display = "none";
			
			document.getElementById('005727').style.display = "none";
			document.getElementById('005781').style.display = "none";
			document.getElementById('005971').style.display = "inline";
			document.getElementById('006158').style.display = "inline";
			document.getElementById('006302').style.display = "inline";
			
			document.getElementById('007385').style.display = "inline";
			document.getElementById('007465').style.display = "inline";
			document.getElementById('007900').style.display = "inline";
			document.getElementById('008601').style.display = "inline";
			document.getElementById('009152').style.display = "inline";
			
			document.getElementById('009155').style.display = "inline";
			document.getElementById('019344').style.display = "inline";
	

	
	
	
	}else if (vol > 5803.2 && vol <= 7737.6){
			
			
			document.getElementById('000788').style.display = "none";
			document.getElementById('000928').style.display = "none";
			document.getElementById('001063').style.display = "none";
			document.getElementById('001184').style.display = "none";
			document.getElementById('001242').style.display = "none";
			
			document.getElementById('001242').style.display = "none";
			document.getElementById('001295').style.display = "none";
			document.getElementById('001341').style.display = "none";
			document.getElementById('001362').style.display = "none";
			document.getElementById('001362-2').style.display = "none";
			
			document.getElementById('001371').style.display = "none";
			document.getElementById('001383').style.display = "none";
			document.getElementById('001398').style.display = "none";
			document.getElementById('001424').style.display = "none";
			document.getElementById('001450').style.display = "none";
			
			document.getElementById('001461').style.display = "none";
			document.getElementById('001487').style.display = "none";
			document.getElementById('001500').style.display = "none";
			document.getElementById('001526').style.display = "none";
			document.getElementById('001589').style.display = "none";
			
			document.getElementById('001639').style.display = "none";
			document.getElementById('001641').style.display = "none";
			document.getElementById('001654').style.display = "none";
			document.getElementById('001662').style.display = "none";
			document.getElementById('001680').style.display = "none";
			
			document.getElementById('001789').style.display = "none";
			document.getElementById('001808').style.display = "none";
			document.getElementById('001883').style.display = "none";
			document.getElementById('001885').style.display = "none";
			document.getElementById('001954').style.display = "none";
			
			document.getElementById('001998').style.display = "none";
			document.getElementById('002026').style.display = "none";
			document.getElementById('002033').style.display = "none";
			document.getElementById('002061').style.display = "none";
			document.getElementById('002081').style.display = "none";
			
			document.getElementById('002135').style.display = "none";
			document.getElementById('002290').style.display = "none";
			document.getElementById('002384').style.display = "none";
			document.getElementById('002403').style.display = "none";
			document.getElementById('002456-2').style.display = "none";
			
			document.getElementById('002456').style.display = "none";
			document.getElementById('002459').style.display = "none";
			document.getElementById('002481').style.display = "none";
			document.getElementById('002520').style.display = "none";
			document.getElementById('002553').style.display = "none";
			
			document.getElementById('002622').style.display = "none";
			document.getElementById('002642').style.display = "none";
			document.getElementById('002650').style.display = "none";
			document.getElementById('002709').style.display = "none";
			document.getElementById('002877').style.display = "none";
			
			document.getElementById('002892').style.display = "none";
			document.getElementById('002897').style.display = "none";
			document.getElementById('002955').style.display = "none";
			document.getElementById('003007').style.display = "none";
			document.getElementById('003071').style.display = "none";
			
			document.getElementById('003168').style.display = "none";
			document.getElementById('003214').style.display = "none";
			document.getElementById('003238').style.display = "none";
			document.getElementById('003296').style.display = "none";
			document.getElementById('003385').style.display = "none";
			
			document.getElementById('003398').style.display = "none";
			document.getElementById('003420').style.display = "none";
			document.getElementById('003475').style.display = "none";
			document.getElementById('003553').style.display = "none";
			document.getElementById('003658').style.display = "none";
			
			document.getElementById('003927').style.display = "none";
			document.getElementById('003965').style.display = "none";
			document.getElementById('003969').style.display = "none";
			document.getElementById('004252').style.display = "none";
			document.getElementById('004579').style.display = "none";
			
			document.getElementById('004753').style.display = "none";
			document.getElementById('004872').style.display = "none";
			document.getElementById('004885').style.display = "none";
			document.getElementById('004938').style.display = "none";
			document.getElementById('004975').style.display = "none";
			
			document.getElementById('004988-2').style.display = "none";
			document.getElementById('004988').style.display = "none";
			document.getElementById('005082').style.display = "none";
			document.getElementById('005195').style.display = "none";
			document.getElementById('005215').style.display = "none";
			
			document.getElementById('005727').style.display = "none";
			document.getElementById('005781').style.display = "none";
			document.getElementById('005971').style.display = "none";
			document.getElementById('006158').style.display = "none";
			document.getElementById('006302').style.display = "none";
			
			document.getElementById('007385').style.display = "none";
			document.getElementById('007465').style.display = "none";
			document.getElementById('007900').style.display = "inline";
			document.getElementById('008601').style.display = "inline";
			document.getElementById('009152').style.display = "inline";
			
			document.getElementById('009155').style.display = "inline";
			document.getElementById('019344').style.display = "inline";
	
	
	
	}else if (vol > 7737.6 && vol <= 9672.4){
			
			
			document.getElementById('000788').style.display = "none";
			document.getElementById('000928').style.display = "none";
			document.getElementById('001063').style.display = "none";
			document.getElementById('001184').style.display = "none";
			document.getElementById('001242').style.display = "none";
			
			document.getElementById('001242').style.display = "none";
			document.getElementById('001295').style.display = "none";
			document.getElementById('001341').style.display = "none";
			document.getElementById('001362').style.display = "none";
			document.getElementById('001362-2').style.display = "none";
			
			document.getElementById('001371').style.display = "none";
			document.getElementById('001383').style.display = "none";
			document.getElementById('001398').style.display = "none";
			document.getElementById('001424').style.display = "none";
			document.getElementById('001450').style.display = "none";
			
			document.getElementById('001461').style.display = "none";
			document.getElementById('001487').style.display = "none";
			document.getElementById('001500').style.display = "none";
			document.getElementById('001526').style.display = "none";
			document.getElementById('001589').style.display = "none";
			
			document.getElementById('001639').style.display = "none";
			document.getElementById('001641').style.display = "none";
			document.getElementById('001654').style.display = "none";
			document.getElementById('001662').style.display = "none";
			document.getElementById('001680').style.display = "none";
			
			document.getElementById('001789').style.display = "none";
			document.getElementById('001808').style.display = "none";
			document.getElementById('001883').style.display = "none";
			document.getElementById('001885').style.display = "none";
			document.getElementById('001954').style.display = "none";
			
			document.getElementById('001998').style.display = "none";
			document.getElementById('002026').style.display = "none";
			document.getElementById('002033').style.display = "none";
			document.getElementById('002061').style.display = "none";
			document.getElementById('002081').style.display = "none";
			
			document.getElementById('002135').style.display = "none";
			document.getElementById('002290').style.display = "none";
			document.getElementById('002384').style.display = "none";
			document.getElementById('002403').style.display = "none";
			document.getElementById('002456-2').style.display = "none";
			
			document.getElementById('002456').style.display = "none";
			document.getElementById('002459').style.display = "none";
			document.getElementById('002481').style.display = "none";
			document.getElementById('002520').style.display = "none";
			document.getElementById('002553').style.display = "none";
			
			document.getElementById('002622').style.display = "none";
			document.getElementById('002642').style.display = "none";
			document.getElementById('002650').style.display = "none";
			document.getElementById('002709').style.display = "none";
			document.getElementById('002877').style.display = "none";
			
			document.getElementById('002892').style.display = "none";
			document.getElementById('002897').style.display = "none";
			document.getElementById('002955').style.display = "none";
			document.getElementById('003007').style.display = "none";
			document.getElementById('003071').style.display = "none";
			
			document.getElementById('003168').style.display = "none";
			document.getElementById('003214').style.display = "none";
			document.getElementById('003238').style.display = "none";
			document.getElementById('003296').style.display = "none";
			document.getElementById('003385').style.display = "none";
			
			document.getElementById('003398').style.display = "none";
			document.getElementById('003420').style.display = "none";
			document.getElementById('003475').style.display = "none";
			document.getElementById('003553').style.display = "none";
			document.getElementById('003658').style.display = "none";
			
			document.getElementById('003927').style.display = "none";
			document.getElementById('003965').style.display = "none";
			document.getElementById('003969').style.display = "none";
			document.getElementById('004252').style.display = "none";
			document.getElementById('004579').style.display = "none";
			
			document.getElementById('004753').style.display = "none";
			document.getElementById('004872').style.display = "none";
			document.getElementById('004885').style.display = "none";
			document.getElementById('004938').style.display = "none";
			document.getElementById('004975').style.display = "none";
			
			document.getElementById('004988-2').style.display = "none";
			document.getElementById('004988').style.display = "none";
			document.getElementById('005082').style.display = "none";
			document.getElementById('005195').style.display = "none";
			document.getElementById('005215').style.display = "none";
			
			document.getElementById('005727').style.display = "none";
			document.getElementById('005781').style.display = "none";
			document.getElementById('005971').style.display = "none";
			document.getElementById('006158').style.display = "none";
			document.getElementById('006302').style.display = "none";
			
			document.getElementById('007385').style.display = "none";
			document.getElementById('007465').style.display = "none";
			document.getElementById('007900').style.display = "none";
			document.getElementById('008601').style.display = "none";
			document.getElementById('009152').style.display = "none";
			
			document.getElementById('009155').style.display = "none";
			document.getElementById('019344').style.display = "inline";
	}else{
	
	
			document.getElementById('000788').style.display = "none";
			document.getElementById('000928').style.display = "none";
			document.getElementById('001063').style.display = "none";
			document.getElementById('001184').style.display = "none";
			document.getElementById('001242').style.display = "none";
			
			document.getElementById('001242').style.display = "none";
			document.getElementById('001295').style.display = "none";
			document.getElementById('001341').style.display = "none";
			document.getElementById('001362').style.display = "none";
			document.getElementById('001362-2').style.display = "none";
			
			document.getElementById('001371').style.display = "none";
			document.getElementById('001383').style.display = "none";
			document.getElementById('001398').style.display = "none";
			document.getElementById('001424').style.display = "none";
			document.getElementById('001450').style.display = "none";
			
			document.getElementById('001461').style.display = "none";
			document.getElementById('001487').style.display = "none";
			document.getElementById('001500').style.display = "none";
			document.getElementById('001526').style.display = "none";
			document.getElementById('001589').style.display = "none";
			
			document.getElementById('001639').style.display = "none";
			document.getElementById('001641').style.display = "none";
			document.getElementById('001654').style.display = "none";
			document.getElementById('001662').style.display = "none";
			document.getElementById('001680').style.display = "none";
			
			document.getElementById('001789').style.display = "none";
			document.getElementById('001808').style.display = "none";
			document.getElementById('001883').style.display = "none";
			document.getElementById('001885').style.display = "none";
			document.getElementById('001954').style.display = "none";
			
			document.getElementById('001998').style.display = "none";
			document.getElementById('002026').style.display = "none";
			document.getElementById('002033').style.display = "none";
			document.getElementById('002061').style.display = "none";
			document.getElementById('002081').style.display = "none";
			
			document.getElementById('002135').style.display = "none";
			document.getElementById('002290').style.display = "none";
			document.getElementById('002384').style.display = "none";
			document.getElementById('002403').style.display = "none";
			document.getElementById('002456-2').style.display = "none";
			
			document.getElementById('002456').style.display = "none";
			document.getElementById('002459').style.display = "none";
			document.getElementById('002481').style.display = "none";
			document.getElementById('002520').style.display = "none";
			document.getElementById('002553').style.display = "none";
			
			document.getElementById('002622').style.display = "none";
			document.getElementById('002642').style.display = "none";
			document.getElementById('002650').style.display = "none";
			document.getElementById('002709').style.display = "none";
			document.getElementById('002877').style.display = "none";
			
			document.getElementById('002892').style.display = "none";
			document.getElementById('002897').style.display = "none";
			document.getElementById('002955').style.display = "none";
			document.getElementById('003007').style.display = "none";
			document.getElementById('003071').style.display = "none";
			
			document.getElementById('003168').style.display = "none";
			document.getElementById('003214').style.display = "none";
			document.getElementById('003238').style.display = "none";
			document.getElementById('003296').style.display = "none";
			document.getElementById('003385').style.display = "none";
			
			document.getElementById('003398').style.display = "none";
			document.getElementById('003420').style.display = "none";
			document.getElementById('003475').style.display = "none";
			document.getElementById('003553').style.display = "none";
			document.getElementById('003658').style.display = "none";
			
			document.getElementById('003927').style.display = "none";
			document.getElementById('003965').style.display = "none";
			document.getElementById('003969').style.display = "none";
			document.getElementById('004252').style.display = "none";
			document.getElementById('004579').style.display = "none";
			
			document.getElementById('004753').style.display = "none";
			document.getElementById('004872').style.display = "none";
			document.getElementById('004885').style.display = "none";
			document.getElementById('004938').style.display = "none";
			document.getElementById('004975').style.display = "none";
			
			document.getElementById('004988-2').style.display = "none";
			document.getElementById('004988').style.display = "none";
			document.getElementById('005082').style.display = "none";
			document.getElementById('005195').style.display = "none";
			document.getElementById('005215').style.display = "none";
			
			document.getElementById('005727').style.display = "none";
			document.getElementById('005781').style.display = "none";
			document.getElementById('005971').style.display = "none";
			document.getElementById('006158').style.display = "none";
			document.getElementById('006302').style.display = "none";
			
			document.getElementById('007385').style.display = "none";
			document.getElementById('007465').style.display = "none";
			document.getElementById('007900').style.display = "none";
			document.getElementById('008601').style.display = "none";
			document.getElementById('009152').style.display = "none";
			
			document.getElementById('009155').style.display = "none";
			document.getElementById('019344').style.display = "inline";
	}
	
	}
		

	
	
	

