$( document ).ready(function() {
    
    var data = "pull";
    
    comando("pull");
    

	$("#up").click(function(){

		var file_data = $('#upload').prop('files')[0];   
		var form_data = new FormData();                  
		form_data.append('file', file_data);

        upload(form_data);
		

	});

    function comando(comando){
        $.ajax({
        url: "php/main.php",
        data: {data},
        dataType: "json",
        method: "get",
        success: function(result){

            // result.lista.forEach(function(item,index){
            //  $('#servidor').html(index + " - " + item);
            // });

            for(var i = 0; i < result.lista.length; i++){
                $('#servidor').append("<p>"+result.lista[i]+"</p>");
            }
            
        },

        error:function (error){
            $("#servidor").html(error.responseText);
            
        }
    });
    }

    function upload(arquivo){
        $.ajax({
                url: "php/upload.php",
                data: arquivo,
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
    }

});