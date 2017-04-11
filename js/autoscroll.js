$("html, body").animate({ scrollTop: $(document).height() }, 15000);
setTimeout(function() {
   $('html, body').animate({scrollTop:0}, 4000);
},4000);
setInterval(function(){
     // 4000 - it will take 4 secound in total from the top of the page to the bottom
$("html, body").animate({ scrollTop: $(document).height() }, 4000);
setTimeout(function() {
   $('html, body').animate({scrollTop:0}, 4000);
},4000);

},8000);
