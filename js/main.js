$( document ).ready(function() {
    
    var data = "pull";
    
    $.ajax({
    	url: "php/main.php",
    	data: {data},
    	dataType: "json",
    	method: "get",
    	success: function(result){

    		result.lista.forEach(function(item,index){
    			$('#servidor').html(index + " - " + item);
    		});
    		
		},

		error:function (error){
			$("#servidor").html(error.responseText);
			
		}
	});

	$("#up").click(function(){

		var file_data = $('#upload').prop('files')[0];   
		var form_data = new FormData();                  
		form_data.append('file', file_data);

		$.ajax({
    	url: "php/upload.php",
    	data: form_data,
    	cache: false,
        contentType: false,
        processData: false,
    	dataType: "json",
    	method: "post",
    	success: function(result){
    		$.jGrowl(result.mensagem);
    		
		},

		error:function (error){
			console.log(error.responseText);
			
		}
	});

	});



});