function addComment () {

	if ($('#user_name').val().length === 0) {
		alert('Please create a user name.');
		return false;
	}

	requestData = $('#last_displayed_chat_id,#user_name,#user_comment').serialize();

	getData(requestData);

		return false;
}




function updateChat () {

	updateData = 'last_displayed_chat_id='+$('#last_displayed_chat_id').val();
	
	getData(updateData);
	
}

function getData(_data) {

$.ajax({
		url: 'http://localhost:80/chat_app/server.php',
		type: 'get',
		dataType: 'json',
		data: _data,
		
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