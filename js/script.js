$(document).ready(function() {
  $("#searcher").hide();
  $('#listIcon').click(function (e) { 
    e.preventDefault();
    $(this).css('color','white');
    $('#gridIcon').css('color','#6c6c66');
     $('#videos .item').addClass('list-item'); 
    });

$('#gridIcon').click(function (e) {
    e.preventDefault(); 
    $(this).css('color','white');
    $('#listIcon').css('color','#6c6c66');
    $('#videos .item').removeClass('list-item'); 
 });
});


$(document).on('click', '#sortBtn', function(e){
  $("#sortBtn-content").toggle();
});


$(document).on('click', '#sortBtn-content a', function(e){
  console.log('sort by ' + $(this)[0].innerText);
  $("#sortBtn-content").toggle();
});

$(document).click(function(e){
  if($(e.target).closest('#sortBtn').length != 0) return false;
  $('#sortBtn-content').hide();
});

$(document).on('click', '#searchBar', function(e){
  $("#searchBar").hide();
  $("#searchInput").val('');
  $("#searcher").show();
});

$(document).on('click', '#closeSearch', function(e){
  $("#searcher").hide();
  $("#searchBar").show();
});

$(document).on('input', '#searchInput', function(e){
  console.log('the text you are searching for is ', $(this).val());
});

$(document).on('click', '#likeVideo', function(e){
  var selectedId = $(this).attr('data-id');
  console.log('user liked ', $(this).attr('data-name'));
  $('#likeVideo[data-id="'+selectedId+'"]').hide();
  $('#dislikeVideo[data-id="'+selectedId+'"]').show();
});

$(document).on('click', '#dislikeVideo', function(e){
  var selectedId = $(this).attr('data-id');
  console.log('user disliked ', $(this).attr('data-name'));
  $('#dislikeVideo[data-id="'+selectedId+'"]').hide();
  $('#likeVideo[data-id="'+selectedId+'"]').show();
});



