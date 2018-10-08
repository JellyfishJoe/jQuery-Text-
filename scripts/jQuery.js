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

	//Table stuff
	$('table').css({
		'border':'1px solid black',
		'width':'400px',
		'margin':'0 auto',
		'border-collapse':'collapse'
	});

	$('#classList thead tr').css({
		'background-color':'#00beef',
		'color':'purple'

	});
/*
	$('.data tbody tr').filter(':even').css({
		'background':'#666'
	});
*/
	$('.data tbody tr').mouseover(function(){
		$(this).addClass('stripe');
	});

	$('.data tbody tr').mouseout(function(){
		$(this).removeClass('stripe');
	});

	$('#classList tbody tr').remove(':contains("Jay")');


	$('<p>New Paragraph</p>').insertAfter('div').addClass('bigg');

	$('<strong>Big Boys Will Be Big</strong>').prependTo('div');

	$('p').html('The paragraphs have changed');
});



