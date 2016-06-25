function addComment () {

	if ($('#user_name').val().length === 0) {
		alert('Please create a user name.');
		return false;
	}

	requestData = $('#last_displayed_chat_id,#user_name,#user_comment').serialize();
	$.ajax({
		url: 'http://localhost:80/chat_app/server.php',
		type: 'get',
		dataType: 'json',
		data: requestData,
		
		success: function(response, status, http) {
			$.each(response, function(index, el) {
				$('#chat_box').val( $('#chat_box').val() + el.user_name + ':' + el.user_comment + '\n' );
				$('#last_displayed_chat_id').val( el.chat_id );
			});
			$('#user_comment').val('');
		},
		error: function (http, status, error) {
			alert('some error occured. ' + error);
		}


	});
		return false;
}




function updateChat () {
	$.ajax({
		url: 'http://localhost:80/chat_app/server.php',
		type: 'get',
		dataType: 'json',
		data: 'last_displayed_chat_id='+$('#last_displayed_chat_id').val(),
		
		success: function(response, status, http) {
			$.each(response, function(index, el) {
				$('#chat_box').val( $('#chat_box').val() + el.user_name + ':' + el.user_comment + '\n' );
				$('#last_displayed_chat_id').val( el.chat_id );
			});
		},
		error: function (http, status, error) {
			alert('some error occured. ' + error);
		}



	});
	
	
}

setInterval(updateChat, 5000);