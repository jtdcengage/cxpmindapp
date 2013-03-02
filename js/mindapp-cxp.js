(function($){
    var cluiRef;
    steal.map({
        "clui": "/static/clui"
    });

    steal('clui/app').then('clui/sso').then(function() {
        Clui.app(function() {
            cluiRef = Clui;
            addActivity();
        });
    });
})(jQuery);


function addActivity() {
   $('#add_activity').on('click',function(e) {
       e.preventDefault();
        console.log('activity.resource.created');
       Clui.hub.pub('activity.resource.created', {
           name: "CXP Assessment",
           description: "This is an assessment",
           activityType: 0,
           appActivityName: "Cengage.CXP/activities/cxp_app", // NOTE: Please make sure to change app name and activity name as per your deployment descriptor
           viewURI: "/view.html"
       });
   });
}

function init() {
    //set sidebar size
    var docHeight = $(document).height() - 70;
    $('#overview').css({'height':docHeight});

    $(window).resize( function() {
        $('#overview').css({'height':docHeight});
    });

}
$(document).ready(function(){
    init();
});