$(function(){
  $("#myTable").tablesorter();
  $("tr:even").css("background-color","lightblue");
  $("tr:odd").css("background-color","gray");
  
  $('table').delegate('td','mouseover mouseleave', function(e) {
    if (e.type == 'mouseover') {
      $(this).parent().children().addClass('highlight');
    } else {
      $(this).parent().children().removeClass('highlight');
    }
  });

});
