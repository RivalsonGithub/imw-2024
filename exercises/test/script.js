$( "#target" ).on( "dblclick", function() {
    alert( "Handler for `dblclick` called." );
  } );

  $( "#other" ).on( "click", function() {
    $( "#target" ).trigger( "dblclick" );
  } );