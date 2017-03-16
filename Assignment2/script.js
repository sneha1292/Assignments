
var movieTitle="";


function getData(){

	var myURL="https://itunes.apple.com/search?term=movie";
	/* ajax call implementation*/

	$.ajax({
		url:myURL,
		method:"GET",
		dataType:"jsonp",
		success:function(data){

			var length=data.results.length;
			

			for(var i=0;i<length;i++)
			{
			$('#result').append('<option name="option'+i+'">'+ data.results[i].trackName +'</option>');	
			}
			
		},

		failure:function(){
			console.log("it is an error");
		}
	});

	$("#result").click(function(){
		movieTitle=$("#result option:selected" ).text();   
		console.log(movieTitle);	
		$.ajax({
			url:myURL,
			method:"GET",
			dataType:"jsonp",
			success:function(data){
				var length=data.results.length;
				for(var i=0;i<length;i++)
				{
					console.log("Entered into loop");
					if(data.results[i].trackName==movieTitle)
					{
						$('#resulstdata').append("<div> " +"Artist Name" +data.results[i].artistName +"</div>");
						$('#resulstdata').append("<div> " +"Artist Name" +data.results[i].artistName +"</div>");
						$('#resulstdata').append("<div> " +"Artist Name" +data.results[i].artistName +"</div>");
						$('#resulstdata').append("<div> " +"Artist Name" +data.results[i].artistName +"</div>");
						$('#resulstdata').append("<div> " +"Artist Name" +data.results[i].artistName +"</div>");
						$('#resulstdata').append("<div> " +"Artist Name" +data.results[i].artistName +"</div>");
					}
				}
			}
			});
	});
	