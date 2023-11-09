// var preloader = document.getElementById('loader');
// function preLoaderHandler(){
//   preloader.style.display = 'none';
// }
// setTimeout(preload, 2 * 1000);

var preloader;

function preload(opacity) {
    if(opacity <= 0) {
        showContent();
    }
    else {
        preloader.style.opacity = opacity;
        window.setTimeout(function() { preload(opacity - 0.05) }, 50);
    }
}

function showContent() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    preloader = document.getElementById('loader');
    preload(4);
});




// document.onload = preLoaderHandler();

// function sendEnquiryform(){
//   var name=$('#name').val();
//   var email=$('#email').val();
//   var message=$('#message').val();
//   $.post("send_mail.php",'name='+name+'&email='+email+'&message='+message,function(result,status,xhr) {
//           if( status.toLowerCase()=="error".toLowerCase() )
//           { alert("An Error Occurred.."); }
//           else { 
//               alert(result);
//               $('#sucessMessage').html(result);
//           }
//       })
//       .fail(function(){ alert("something went wrong. Please try again") });
// }