$(document).ready(function(){
    $( function() {
        $( "#to-do, #in-progess, #for-approval, #testing, #done" ).sortable({
            connectWith: "ul"
            }).disableSelection();
      });
});