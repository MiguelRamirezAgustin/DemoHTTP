// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
        
function  ViewImagens(e){ 
var xhr= Ti.Network.createHTTPClient({
     onload: function(e){
          alert('imagen mostrada');
         Ti.API.info('onload called http ' + this.status);
         var img= Ti.UI.createImageView({
             image:this.responseData,
             width:"80%",
             heigth:"80%",
             top:40,
         });
        $.view2.add(img);
     },
     onerror: function(e){
         Ti.API.info('error, http= ' + this.status);
         alert(e.error);
     },
     timeout:5000
});
    xhr.open("GET","https://images.idgesg.net/images/article/2017/08/android_robot_logo_by_ornecolorada_cc0_via_pixabay1904852_wide-100732483-large.jpg");
    xhr.send();
}