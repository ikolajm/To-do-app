// Check off todos on click
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// Remove todos when clicking delete
$('ul').on('click', 'span', function(e) {
  // Fadeout and remove todo
  $(this).parent().fadeOut(300, function() {
    $(this).remove();
  });
  // Stop bubbling
  e.stopPropagation();
});

// Add a todo on input and "enter" press
$("input[type='text']").on('keypress', function(e) {
  // If user presses 'enter'
  if (e.which === 13) {
    // Place input in variable
    var newTodo = $(this).val();
    // Clear input of value
    $(this).val("");
    // Create new li and add it to end of ul
    $('ul').append("<li><span><i class='fas fa-trash-alt'></i></span>" + newTodo + "</li>");
  }
})

// Show/hide input on plus press
$('.fa-plus').on('click', function() {
  $("input[type='text']").fadeToggle(300);
})
