var $form = $('form');

var $theChore = $('#the-chore');

var $newChore = $('.new-chore');



$form.on('submit', function (e) {
	e.preventDefault();
	var $li = $('<li>');
	$li.addClass('chore');
	$newChore.append($li);
});

