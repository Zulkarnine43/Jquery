// document.querySelector("h1").innerHTML="hello";
// $("h1").text("good bye");


// $("#p1, h1").html("<b>hi</b>");

// $("p").append("good bye");//senstence r age vosbe
// $("p").prepend("good bye");//senstence r pore vosbe


// var mypara1=$("<p></p>").text("This is paragraph");
// $("#p1").after(mypara1);//senstence r age vosbe
// $("#p1").before(mypara1);//senstence r pore vosbe

// $("a").attr("href","http://zulkarnine360.xyz/");//for set
// $("a").attr("href");//for get
// $("a").removeAttr("href");

//alada alada
// $("h1").css("color","red");
// $("h1").css("font-size","3rem");

//aksathe
// $("h1").css({"color":"red","font-size":"3rem"});

//external link javaScript
// document.querySelector.classList.add("style1");
// document.querySelector.classList.remove("style1");

//external link jquery
// $("h1").addClass("style1");//akta
// $("h1").addClass("style1 style2");//more
// $("h1").removeClass("style1");

//eventListener

//Single EventLinstener
// document.querySelector("button").addEventListener("click",function(){
//     document.querySelector("h1").innerHTML="You have Clicked the button"
// })

// $("button").click(function(){
//     $("h1").text("You have Clicked the button");
// })

// $("button").click(function(){
//     $("h1").toggleClass("style1")
// })

//Multiple EventLinstener
// $(".mybutton").click(function(){
//     var value=this.innerHTML;
//     $("h1").text(value + "is clicked")
// })


//input value with listener

// $("#loginButton").click(function(){
    
// var password1=$("#pass1").val();
// var password2=$("#pass2").val();

// if(password1!="" && password2!=""){

// if(password1==password2){
//     alert("Successfully login")
// }else{
//     alert("password mismatch")
// }

// }else{
//     alert("please enter password")
// }

// })




//Animation

// hide show
// $("#btn").click(function(){
//     //alada alada
//     //$("#div1").hide();
//    // $("#div1").show(1000);//1 second pore show korbe
//    //hide show aksathe
//    $("#div1").hide(2000).show(2000);
// })



// //Animation

// // toggle method

// $("#btn").click(function(){

// $("#div1").toggle(2000);

// })



//Animation

// fadeout fadein faidTo method

// $("#btn").click(function(){
// //alada alada
//     // $("#div1").fadeOut(2000);
//     // $("#div1").fadeIn(2000);

//     //aksathe
//     $("#div1").fadeOut(2000).fadeIn(2000);

//   //opacity less
//   $("#div1").fadeTo(2000,0.7);
    
//     })


    //Animation

 //fadeToggle method

// $("#btn").click(function(){
   
//          $("#div1").fadeToggle(2000);

//         })


//Animation

 //SlideUp SlideDown  method

// $("#btn").click(function(){
//    //alada alada
//     // $("#div1").slideUp(2000);
//     // $("#div1").slideDown(2000);
// //aksatthe
// // $("#div1").slideUp(2000).slideDown(2000);

// //slideToggle

// $("#div1").slideToggle(2000);
//    })


//Animation

 //Animate  method
 $("#btn").click(function(){
    $("#div1").animate({height:"400px",width:"900px",marginLeft:"30px"},2000);

 })