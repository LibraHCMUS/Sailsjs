$(document).ready(function(){
	$('#sigh-up-form').validate({
		rule: {
			name: {
				required: true
			},
			email: {
				required: true
				email: true
			},
			state: {
				required: true
			},
			password: {
				minlength: 6
				required: true
			},
			confirmation: {
				minlength: 6
				equalTo: "#password"
			}
		},
		success: function(element) {
			element
			.text('OK').addClass('valid')
		}
	});
});