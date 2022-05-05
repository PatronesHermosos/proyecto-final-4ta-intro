	AniJS.run();
		var MyApp = {};

		//Obtaining the Notifier
		MyApp.SecurityNotifier = AniJS.getNotifier('Security');

		MyApp.processError = function(message){

			//Right now the events triggered by SecurityNotifier can be listened by AniJS
			$(MyApp.SecurityNotifier).trigger('answerError');
			document.getElementById('loadajax').innerHTML = message;
		}

		MyApp.processSuccess = function(message){

			//Right now the events triggered by SecurityNotifier can be listened by AniJS
			$(MyApp.Notifier).trigger('answerSuccess');
			document.getElementById('loadajax').innerHTML = message;
		}


		//Using native API to listen for the user click
		//https://developer.mozilla.org/en-US/docs/Web/API/Event
		formButton = document.getElementById("questionButton");
		questionButton.addEventListener('click', function(e){

			var request = document.getElementById('answerfield').value;

			document.getElementById('loadajax').innerHTML = 'Processing...';
	

			//Now you can wait for an Ajax Response
			MyApp.someAjaxModule.getResponse(request, function(response){

				if(response.error){
					MyApp.processError(response.error);
				} else{
					MyApp.processSuccess(response.success);
				}
				
			})
		

		}, false);

		//It's just a simulation
		MyApp.someAjaxModule = {
			getResponse: function(data, callback){
				var response = {};
				if( data === '26'){
					response.success = 'Cool :)';
				} else {
					response.error = 'Bad :(';
				}
				setTimeout(function(){
					callback(response);
				}, 1300)
			}
		}
		$(function(){
			$('.btn').click(function(){
			  $('body').hasClass('open') ? $('body').removeClass('open'):$('body').addClass('open')
			})
		  })
		  