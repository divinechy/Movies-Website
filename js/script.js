$(document).ready(function () {
  $("#searcher").hide();
  $('#listIcon').click(function (e) {
    e.preventDefault();
    $(this).css('color', 'white');
    $('#gridIcon').css('color', '#6c6c66');
    $('#videos .item').addClass('list-item');
  });

  $('#gridIcon').click(function (e) {
    e.preventDefault();
    $(this).css('color', 'white');
    $('#listIcon').css('color', '#6c6c66');
    $('#videos .item').removeClass('list-item');
  });
});


$(document).on('click', '#sortBtn', function (e) {
  $("#sortBtn-content").toggle();
});


$(document).on('click', '#sortBtn-content a', function (e) {
  console.log('sort by ' + $(this)[0].innerText);
  $("#sortBtn-content").toggle();
});

$(document).click(function (e) {
  if ($(e.target).closest('#sortBtn').length != 0) return false;
  $('#sortBtn-content').hide();

  if ($(e.target).closest('#videoModal').length != 0) return false;
  $('#videoModal').modal('hide');
});

$(document).on('click', '#searchBar', function (e) {
  $("#searchBar").hide();
  $("#searchInput").val('');
  $("#searcher").show();
});

$(document).on('click', '#closeSearch', function (e) {
  $("#searcher").hide();
  $("#searchBar").show();
});

$(document).on('input', '#searchInput', function (e) {
  console.log('the text you are searching for is ', $(this).val());
});

$(document).on('click', '#likeVideo', function (e) {
  e.stopPropagation();
  var selectedId = $(this).attr('data-id');
  console.log('user liked ', $(this).attr('data-name'));
  $('#likeVideo[data-id="' + selectedId + '"]').hide();
  $('#dislikeVideo[data-id="' + selectedId + '"]').show();
});

$(document).on('click', '#dislikeVideo', function (e) {
  e.stopPropagation();
  var selectedId = $(this).attr('data-id');
  console.log('user disliked ', $(this).attr('data-name'));
  $('#dislikeVideo[data-id="' + selectedId + '"]').hide();
  $('#likeVideo[data-id="' + selectedId + '"]').show();
});

$(document).on('click', '.viewVideoModal', function (e) {
  //make api call to get video details and stream
  e.stopPropagation();
  var selectedId = $(this).attr('data-id');
  var selectedName = $(this).attr('data-name');
  $('#videoContent').empty();
  $('#videoContent').append(`<div class="row" style="height : 75vh; padding:0">
   <div class="col-sm-9" style="background:url('./images/video-` + selectedId + `.png'); background-size: cover; padding:0; background-repeat:no-repeat; height: 100%">
   <p style="margin-left: 3%; color: white; font-size: 18px; margin-top: 1%">` + selectedName + ` </p>
   </div>
   <div class="col-sm-3" style="background-color: #272727; height: 100%; padding: 0">
   <p style="margin-left: 5%; color: white; margin-top: 10%; font-size:18px"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     <div class="reactions" style="margin-left: 5%; margin-top: 10%;">
       <i style=" margin-right: 5px; margin-top: 0; color: white;" class="fa fa-gg-circle"></i>
        <p style="color: white; font-weight: 600; margin-top: 0;">46 Tracks</p>
        <i style=" margin-right: 5px; margin-left: 15px;  margin-top: 0; color: white;"
          class="fa fa-podcast"></i>
       <p style="color: white; font-weight: 600; margin-top: 0;">250K All tracks</p>
     </div>
     <div class="reactions" style="margin-left: 5%;>
       <i style=" margin-right: 5px; margin-top: 0; color: white;" class="fa fa-eye"></i>
        <p style="color: white; font-weight: 600; margin-top: 0;">601M Views</p>
        <i style=" margin-right: 5px; margin-left: 15px;  margin-top: 0; color: white;"
          class="fa fa-thumbs-o-up""></i>
       <p style="color: white; font-weight: 600; margin-top: 0;">250K Likes</p>
     </div>
     <div class="reactions" style="margin-left: 5%;>
       <i style=" margin-right: 5px; margin-top: 0; color: white;" class="fa fa-thumbs-o-down""></i>
        <p style="color: white; font-weight: 600; margin-top: 0;">24K Dislikes</p>
        <i style=" margin-right: 5px; margin-left: 15px;  margin-top: 0; color: white;"
          class="fa fa-comment-o"></i>
       <p style="color: white; font-weight: 600; margin-top: 0;">12K Comments</p>
     </div>

     <div class="reactions" style="margin-left: 10%; margin-top: 10%;">
        <div class="header-profile">
          <img src="./images/jane-doe.jpg" alt="profile-avatar" class="profile-image">
         </div>
       <div class="col-sm-9">
       <p style="color: white; font-weight: 600; margin-top: 0; font-size:15px"">TED Foundation</p>
       <p style="color: white; font-weight: 400; margin-top: -10px; font-size:15px"">2 Years Ago</p>
       </div>
     </div>

     <div class="col-sm-9" style="margin-left: 5%; margin-top: 10%;">
     <p style="color: white; font-weight: 600; margin-top: 0; font-size:18px"">My Trackers</p>
     <input type="text"
          id="searchInput2" placeholder="Search Trackers" style="margin-top: 10%; width: 100%" name="searchInput">
          <div class="reactions" style="margin-left: 5%; margin-top: 10%;">
          <p style="color: white; font-weight: 400; margin-top: 0; font-size:15px"">Trending and classy</p><i style=" margin-left: auto; margin-top: 5px; color: white;" class="fa fa-check""></i>
          </div>
          <div class="reactions" style="margin-left: 5%; margin-top: 10%;">
          <p style="color: white; font-weight: 400; margin-top: 0; font-size:15px"">Technology</p><i style=" margin-left: auto; margin-top: 5px; color: #444343;" class="fa fa-check""></i>
          </div>
          <div class="reactions" style="margin-left: 5%; margin-top: 10%;">
          <p style="color: white; font-weight: 400; margin-top: 0; font-size:15px"">Education</p><i style=" margin-left: auto; margin-top: 5px; color: white;" class="fa fa-check""></i>
          </div>
          <div class="reactions" style="margin-left: 5%; margin-top: 10%;">
          <p style="color: white; font-weight: 400; margin-top: 0; font-size:15px"">Gaming</p><i style=" margin-left: auto; margin-top: 5px; color: #444343;" class="fa fa-check""></i>
          </div>
          </div>
         
     </div>

   </div>  

  </div>
  `);

});



