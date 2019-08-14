$( document ).ready(function() {
    $( ".bill-btn" ).click(function() {
        $( ".bill-btn" ).toggleClass( "btn-yearly" );
        if ( $( this ).hasClass( "btn-yearly" ) ) {
            $( ".yearly" ).addClass( "bill-bolded" );
            $( ".monthly" ).removeClass( "bill-bolded" );
        }else{
 
            console.log('565665656474747');
            $( ".yearly" ).removeClass( "bill-bolded" );
            $( ".monthly" ).addClass( "bill-bolded" );
        }
    });
      
});