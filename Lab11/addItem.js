$(function(){
  $('#searchform').submit(function(){
    addItemToList("example item");
    return false;
  });
});

function addItemToList(item){
  $('#results').append("<li>"+item+"</item>");
}
