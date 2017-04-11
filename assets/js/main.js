window.onload = function() {
  initMap();
};



//google maps initiatives
  function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 2.8113711933311403, lng: 23.90625},
          scrollwheel: false,
          zoom: 2
        });
      }
//google maps initiatives



      
function show_sub_categories(id){

  
var data = {'id':id};

       $.ajax({
           url: "/scripts/sub_cat_by_id.php", // link of your "whatever" php
           type: "POST",
           async: true,
           cache: false,
           data: data, // all data will be passed here
        
    
           success: function(data){
            
             $('#errors_sub_cat').html(data);
              // alert(data) // The data that is echoed from the ajax.php
           }


    });
}




function get_user_details(user_id){


  if(window.XMLHttpRequest)
   {
     
    xmlhttp = new XMLHttpRequest(); 
         
    
       }  else {
         
         xmlhttp = new ActiveXObject('Microsoft.XMLHttp');
         
       }  
       xmlhttp.onreadystatechange = function() {
         
       if (xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
         
         //response('<h1>'+xmlhttp.responseText+'</h1>');

        document.getElementById("user_min_profile").innerHTML = xmlhttp.responseText; 
       }
       
      }
      
  parameters = 'user_id='+user_id;
  
  xmlhttp.open('POST', '../scripts/get_user_details.php', true);
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xmlhttp.send(parameters);

}






      function volunteer(){

          //var data = { 'id': id , 'name': name};


           var data = $("form").serialize();

                   $.ajax({
                       url: "/scripts/volunteer.php", // link of your "whatever" php
                       type: "POST",
                       async: true,
                       cache: false,
                       data: data, // all data will be passed here
                       beforeSend: function() {
                           $('#loadingmessage').show();
                        },
                        complete: function(){

                           $('#loadingmessage').hide();

                             $("#name").val('');

                             $("#email").val('');

                             $("#volunter_skills").val(''); 

                        },
                       success: function(data){
                        
                         $('#errors_volunteers').html(data);
                          // alert(data) // The data that is echoed from the ajax.php
                       }


                });

               

          }







      function newsletter(){

          //var data = { 'id': id , 'name': name};


           var data = $("form").serialize();

                   $.ajax({
                       url: "scripts/newsletter", // link of your "whatever" php
                       type: "POST",
                       async: true,
                       cache: false,
                       data: data, // all data will be passed here
                       beforeSend: function() {
                           $('#loadingmessage').show();
                        },
                        complete: function(){
                           $('#loadingmessage').hide();

                           $("#email_newsletter").val('');
                            
                        },
                       success: function(data){


                        
                         $('#errors_newsletter').html(data);
                          // alert(data) // The data that is echoed from the ajax.php
                       }


                });

               

          }




function sub_cat_by_id(id){

var data = { 'id':id }

     $.ajax({
         url: "../scripts/sub_gap_by_id.php", // link of your "whatever" php
         type: "POST",
         async: true,
         cache: false,
         data: data, // all data will be passed here
          beforeSend: function() {
               $('#loadingmessage').show();
            },
            complete: function(){
               $('#loadingmessage').hide();

               $("#email_newsletter").val('');
                
            },
           success: function(data){

           $('#error_'+id+'').html(data);
            // alert(data) // The data that is echoed from the ajax.php
         }


  });

}









function picInitiative(){


            var checked = $('input[type="radio"]:checked').val(); 
            
            $('.checkout_link').hide();
            $('.checkout_enable').show();

                var data = { 'checked':checked }

                   $.ajax({
                       url: "../scripts/get_ini_name.php", // link of your "whatever" php
                       type: "POST",
                       async: true,
                       cache: false,
                       data: data, // all data will be passed here
                       
                        success: function(data){
                         $('.initiative_selected').html(data);
                          // alert(data) // The data that is echoed from the ajax.php
                       }


                });






      
  }




        /* side bar menu */
        //side bar 
        $("#menu-toggle").click(function(e){
          e.preventDefault();
          $("#wrapper").toggleClass("menuDisplayed").fadeIn();
        });




         $(document).ready(function(){

        $("#wrapper").toggleClass("menuDisplayed").fadeIn();


      
          $('#content_area').load($(".menu_sidebar:first").attr('href'));
 
         });


        //loading content page.
        $(".menu_sidebar").click(function(){

            var href = $(this).attr('href');

            $('#content_area').hide().load(href).fadeIn('normal');

            return false; 

        });





  /* query */
        $(document).ready(function(){


           $('.checkout_enable').hide();

            $('a#logged_button').webuiPopover({


            url:'#logged_in_menu',
            trigger:'click',
            animation:'pop',
            closeable:true,
            width:210,
            placement:'bottom',
            multi:false,
            
          });




            $('a#login_button').webuiPopover({


            url:'#login_form',
            trigger:'click',
            animation:'pop',
            closeable:false,
            width:300,
            placement:'auto',
            offsetLeft:5,
            multi:false,
           


          });




          

          $('a#join_button').webuiPopover({


            url:'#join_form',
            trigger:'click',
            animation:'pop',
            closeable:false,
            width:400,
            placement:'auto',
            offsetLeft:5,
            multi:false,
           


          });



          



          $('button#forgot_password').webuiPopover({

            url:'#forgot_password',
            trigger:'click',
            animation:'pop',
            closeable:true,
            width:300,
            placement:'bottom',
            offsetLeft:5,
            multi:true,
            title: 'Forgot password!'


          });



        $('.menu_gap_left').webuiPopover({

              trigger:'click',
              animation:'pop',
              width:441,
              height:450,
              placement:'right',
              offsetLeft:5,
              multi:false,

        });





        $('.menu_gap_right').webuiPopover({


            trigger:'click',
            animation:'pop',
            width:450,
            height:450,
            placement:'left',
            offsetLeft:5,
            multi:false,

          });


});//end jquery



      //random animations on the family page
          function randomFromTo(from, to){
            return Math.floor(Math.random() * (to - from + 1) + from);
          }


          function moveRandom(obj) {
            /* get container position and size
             * -- access method : cPos.top and cPos.left */
            var cPos = $('#users_family').offset();
            var cHeight = $('#users_family').height();
            var cWidth = $('#users_family').width();

           

            // get box padding (assume all padding have same value)
            var pad = parseInt($('#users_family').css('padding-top').replace('px', ''));

            // get movable box size
            var bHeight = obj.height();
            var bWidth = obj.width();

            // set maximum position
            maxY = cPos.top + cHeight - bHeight - pad;
            maxX = cPos.left + cWidth - bWidth - pad;

            // set minimum position
            minY = cPos.top + pad;
            minX = cPos.left + pad;

            // set new position
            newY = randomFromTo(minY, maxY);
            newX = randomFromTo(minX, maxX);

            obj.animate({
              top: newY,
              left: newX

            }, 12000, function() {
                moveRandom(obj);
            });
          }


      $('.latestblock').each(function() {
      moveRandom($(this));
      });





      $('a.stop_family').click(function() {

          $('.latestblock').each(function() {
          $(this).stop();

              });
      });


      $('a.go_family').click(function() {


          $('.latestblock').each(function() {

          moveRandom($(this));

          });
      });



      $(".latestblock").mouseover(function () {

        $(this).stop();

      });


      $('#user_min_profile').mouseleave(function () {

        $(this).fadeOut('slow');

      });




      $(".latestblock").mouseleave(function () {

        moveRandom($(this));

      });
       




      function hoverdiv(e,divid){

          var left  = e.clientX  + "px";
          var top  = e.clientY  + "px";

          var div = document.getElementById(divid);

          div.style.left = left;
          div.style.top = top;

          $("#"+divid).toggle();
          return false;
      }



