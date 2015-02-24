var $form = $('form');

var $theChore = $('#chore');

var $newChore = $('.new-chore');



$form.on('submit', function (e) {
	e.preventDefault();
	var $li = $('<li>');
	$li.addClass('chore');
	$newChore.append($li);
	$li.append($theChore.val());
});

$li.on('click', function () {
	$li.css('color', grey);
});
