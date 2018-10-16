// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
        
function  ViewImagens(e){

var xhr= Ti.UI.Network.createHTTPClient({
     onload: function(e){
         Ti.API.info('onload called http ' + this.status);
         var img= Ti.UI.createImageView({
             image:this.responseData,
             width:"80%",
             heigth:"80%",
         });
        $.view2.add(img);
     },
     onerror: function(e){
         Ti.API.info('error, http= ' + this.status);
         alert(e.error);
     },
     timeout:5000
});

xhr.open("GET","https://www.google.com.mx/search?q=android&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjp08Ct1IneAhVP_oMKHYNWCDQQ_AUIDigB&biw=1366&bih=657#imgrc=wvxBcdb7ABRUYM:");
xhr.send();
}