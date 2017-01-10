// var count = 1;

$(function(){
//   $('.slide').each(function(key,value){
//     $(this).attr('id','slide_'+key)
//   })

$(window).keypress(function(e) {
  if(e.key == 'n'){
    // $('#slide_'+count).smoothScroll()
    // count++
    console.log('hi');

    var active = $(".active").removeClass('active');
    if(active.next() && active.next().length){
         active.next().addClass('active');
    }
    else{
      active.siblings(":first").addClass('active');
    }
    // $('.active').smoothScroll()

    document.querySelector('.active').scrollIntoView();
  }
});





$('.avatarGen').click(function(){
  var r = Math.round(Math.random()*75)
  $('.avatarGen').attr('src', 'avatars/avatar_'+ r +'.png')
})




function randAvatars(){
  $('.slide').each(function(key,value){

  var r1 = Math.round(Math.random()*75)
  var r2 = Math.round(Math.random()*75)
  var r3 = Math.round(Math.random()*75)
  var r4 = Math.round(Math.random()*75)

  // $('.slide').css('background-image', 'url(avatars/avatar_' + r1 + '.png), url(avatars/avatar_' + r2 + '.png), url(avatars/avatar_' + r3 + '.png), url(avatars/avatar_' + r4 + '.png)')

      $(this).css('background-image','url(avatars/avatar_' + r1 + '.png), url(avatars/avatar_' + r2 + '.png), url(avatars/avatar_' + r3 + '.png),url(avatars/avatar_' + r4 + '.png)' )
    })

}

randAvatars()

})


