var hide = false;

$(document).ready(function(){
	//alert("First jQuery program");
	/*
	$('#hideBtn').click(function(){
		$('#legal').hide();
	});

	$('#showBtn').click(function(){
		$('#legal').show();
	})
	*/
	$('#toggleBtn').click(function(){
		//$('#legal').fadeToggle();
		if(hide = !hide){ 
			$('#legal').show();
			this.innerHTML = "Hide Text";
		}else{
			$('#legal').hide();
			this.innerHTML = "Show Text"
		}
	})
});



