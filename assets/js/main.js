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
         
          success: function(data){
           $('#error').html(data);
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

          $('#content_area').load($(".menu_sidebar:first").attr('href'));
 
         });

        //loading content page.
        $(".menu_sidebar").click(function(){

            var href = $(this).attr('href');

            $('#content_area').hide().load(href).fadeIn('normal');

            return false; 

        });





        /* login popup */
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
              closeable:true,
              width:441,
              height:450,
              placement:'right',
              offsetLeft:5,
              multi:false,

        });





        $('.menu_gap_right').webuiPopover({
            trigger:'click',
            animation:'pop',
            closeable:true,
            width:450,
            height:450,
            placement:'left',
            offsetLeft:5,
            multi:false,

          });





        });

  