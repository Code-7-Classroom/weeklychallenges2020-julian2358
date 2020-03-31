function validate() {
      
    if( document.myForm.user.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.user.focus() ;
       return false;
    }
    if( document.myForm.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.myForm.email.focus() ;
       return false;
    }


     
}