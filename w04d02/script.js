console.log(username);

$(document).ready(() => {
  // created an li and gave it a text node
  const $li = $('<li>').text('Nine').addClass('red blue green'); // <li>Seven</li>

  // grab the list from the DOM
  const $list = $('#main-list');

  // append our new li
  $list.append($li);

  // grab the button
  const $button = $('#add-new-number');
  $button.on('click', () => {
    const $input = $('#new-number');
    const value = $input.val();
    const $newLi = $('<li>').text(value);
    $list.append($newLi);
    
    $input.val('').focus();
  });

});
