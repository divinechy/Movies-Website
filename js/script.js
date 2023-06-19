var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var c6 = 0;
var c7 = 0;
var c8 = 0;
var c9 = 0;
var counter = 0;
var numArray = [];

$('#k1').text(c1);
$('#k2').text(c2);
$('#k3').text(c3);
$('#k4').text(c4);
$('#k5').text(c5);
$('#k6').text(c6);
$('#k7').text(c7);
$('#k8').text(c8);
$('#k9').text(c9);

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

$(document).on('click', '.tracker-badge', function (e) {
  e.stopPropagation();
  var selectedId = $(this).attr('data-id');
  var sel = document.querySelector('#trackers[data-id="' + selectedId + '"]');
  sel.classList.toggle("show");
});


$(document).on('click', '#trackers', function (e) {
  e.stopPropagation();
});

$(document).on('click', '#addTracker', function (e) {
  e.stopPropagation();
  var selectedId = $(this).attr('data-id');
  var badge = document.querySelector('.tracker-badge[data-id="' + selectedId + '"]');
  switch (selectedId) {
    case "1":
      c1++;
      $('#k1').text(c1);
      $(badge).css('background-color', 'red');
      break;
    case "2":
      c2++;
      $('#k2').text(c2);
      $(badge).css('background-color', 'red');
      break;
    case "3":
      c3++;
      $('#k3').text(c3);
      $(badge).css('background-color', 'red');
      break;
    case "4":
      c4++;
      $('#k4').text(c4);
      $(badge).css('background-color', 'red');
      break;
    case "5":
      c5++;
      $('#k5').text(c5);
      $(badge).css('background-color', 'red');
      break;
    case "6":
      c6++;
      $('#k6').text(c6);
      $(badge).css('background-color', 'red');
      break;
    case "7":
      c7++;
      $('#k7').text(c7);
      $(badge).css('background-color', 'red');
      break;
    case "8":
      c8++;
      $('#k8').text(c8);
      $(badge).css('background-color', 'red');
      break;
  }

  var sel = document.querySelector('#trackers[data-id="' + selectedId + '"]');
  sel.classList.toggle("show");
});

var starttime;
var difftime;
function start() {
  starttime = new Date();
}
function end() {
  var now = new Date();
  difftime = now - starttime;
}

$('.item').mousedown(start);
$('.item').mouseup(end);

$('.item').mousedown(function (e) {
  e.stopPropagation();
  var selectedId = $(this).attr('data-id');
  clearTimeout(this.downTimer);
  this.downTimer = setTimeout(function () {
    var isSelected = document.querySelector('#isSelected[data-id="' + selectedId + '"]');
    isSelected.classList.toggle("show");

    if ($(isSelected).is(':visible')) {
      counter++;
      numArray.push(selectedId);
    }
    else {
      counter--;
      var index = numArray.indexOf(selectedId);
      if (index > -1) {
        numArray.splice(index, 1);
      }
    }
    var sel = document.querySelector('#trackers[data-id="' + 9 + '"]');
    if (counter > 0) {
      $(sel).css("visibility", "visible");
    }
    else {
      $(sel).css("visibility", "hidden");
    }
    console.log('the array is ', numArray);
  }, 1000);
}).click(function (e) {
  console.log('the target is ', e.target.id);
  console.log(e.target);
  if (e.target.id == "list-image" || e.target.id == "likeVideo" || e.target.id == "dislikeVideo" || e.target.id == "tracker-badge" ||
    e.target.id == "addTracker" || e.target.id == "k1" || e.target.id == "k2" || e.target.id == "k3" ||
    e.target.id == "k4" || e.target.id == "k5" || e.target.id == "k6" || e.target.id == "k7" || e.target.id == "k8" ||
    e.target.id == "t1" || e.target.id == "t2" || e.target.id == "t3" ||
    e.target.id == "t4" || e.target.id == "t5" || e.target.id == "t6" || e.target.id == "t7" || e.target.id == "t8" || e.target.id == "searchInput3"
  ) {
    if (difftime >= 1000) {
      e.stopPropagation();
      e.preventDefault();
    }
    else {
      //click not long press
    }
  }
  else {
    e.stopPropagation();
    e.preventDefault();
  }

}).mouseup(function (e) {
  clearTimeout(this.downTimer);
});


$(document).on('click', '#addMultiple', function () {
  counter = 0;
  for (var i = 0; i < numArray.length; i++) {
    var selectedId = numArray[i];
    var badge = document.querySelector('.tracker-badge[data-id="' + selectedId + '"]');
    var isSelected = document.querySelector('#isSelected[data-id="' + selectedId + '"]');
    switch (selectedId) {
      case "1":
        c1++;
        $('#k1').text(c1);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
      case "2":
        c2++;
        $('#k2').text(c2);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
      case "3":
        c3++;
        $('#k3').text(c3);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
      case "4":
        c4++;
        $('#k4').text(c4);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
      case "5":
        c5++;
        $('#k5').text(c5);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
      case "6":
        c6++;
        $('#k6').text(c6);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
      case "7":
        c7++;
        $('#k7').text(c7);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
      case "8":
        c8++;
        $('#k8').text(c8);
        isSelected.classList.toggle("show");
        $(badge).css('background-color', 'red');
        break;
    }
  }
  var sel = document.querySelector('#trackers[data-id="' + 9 + '"]');
  $(sel).css("visibility", "hidden");
  numArray = [];
});



