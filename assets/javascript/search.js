
//   $(function(){
//     var $searchlink = $('#searchtoggl i');
//     var $searchbar  = $('#searchbar');
    
//     $('ul li a').on('click', function(e){
//       e.preventDefault();
      
//       if($(this).attr('id') == 'searchtoggl') {
//         if(!$searchbar.is(":visible")) { 
//           // if invisible we switch the icon to appear collapsable
//           $searchlink.removeClass('fa-search').addClass('fa-search-minus');
//         } else {
//           // if visible we switch the icon to appear as a toggle
//           $searchlink.removeClass('fa-search-minus').addClass('fa-search');
//         }
        
//         $searchbar.slideToggle(300, function(){
//           // callback after search bar animation
//         });
//       }
//     });

//     $('#searchform').submit(function(){
//         var searchText = document.getElementById("s").value;
        
      
//     });

//   });

//   document.getElementById("searchsubmit").addEventListener("submit", function(e) {
//     e.preventDefault();
  
//     var searchText = document.getElementById("s").value;
//     // var extension = document.getElementById("hiddenvalue1").value;
  
//     window.location = this.action + searchText + "." + "com";
//     // or if you don't want to use the form's action attribute to specify
//     // the domain you could hardcode it in the function:
//     // window.location = "http://www.website.com/" + searchText + "." + extension;
//   });