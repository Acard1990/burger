$(function(){
  $('.eaten-btn').on('click', function(){
    var id = $(this).data('id');
    var isDevoured = {
      eaten: 1
      console.log("eaten")
    };
    console.log(id);
    $.ajax('/api/burger/' + id, {
      method: 'PUT',
      data: isDevoured
    }).then(function(){
      location.reload();
    });
  });

  $('#add-burger').on('click', function(){
    var newBurger = {
      name: $('#text-area').val().trim(),
      eaten: 0
    };
    $.ajax(`/api/burger`, {
      method: 'POST',
      data: newBurger
    }).then(function(){
      location.reload();
    });
  });

  $('.delete-btn').on('click', function(){
    var id = $(this).data('id');
    $.ajax('/api/burger/' + id, {
      method: 'DELETE'
    }).then(function(){
      location.reload();
    });
  });
});
