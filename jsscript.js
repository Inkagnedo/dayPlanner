var now = moment().format("dddd, MMMM Do, YYYY, h:mm:ss A");
     // Saturday, June 9th, 2007, 5:46:21 PM
$('#date').append(now);

$(document).ready(function() {
	$('btn').on('click', 'button[name=dotemp]', function() {
		$.ajax({
			type: "post",
			url: "process.php",
			dataType: 'json',
			data: {
				htmlcode: $("#formRaw").html()
			},
			success: function(json) {
			}
		});
	});
})
