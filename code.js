"use strict"
$("form").submit(function(e){
    e.preventDefault(); // отмена дефолтного действия

    let name = $(this).find("[name='name']").val();

    let email = $(this).find("[name='email']").val();
    let password = $(this).find("[name='password']").val();
    let confirm = $(this).find("[name='confirm']").val();
    let check = $(this).find("[type='checkbox']");
    console.log(password);
    console.log(confirm);
    console.log(password != confirm);
    console.log(check[0].checked);
    if(name == ""  
    || email =="" 
    || password == "" 
    || confirm == ""
    || password != confirm 
    || check[0].checked == false){

    if(name == ""){
        $(".error_name").html(""); // вот тут обнуляю значение
        $(this).find("[name='name']").after("<p class='error_name error'>вы не заполнили имя</p>");
        // вот тут добавляю элемент что пользователь ошибся!
    }  else{
        $(".error_name").html(""); // вот тут обнуляю значение
    }

    if(email == ""){
        $(".error_email").html("");
        $(this).find("[name='email']").after("<p class='error_email error'>вы не заполнили почту</p>");
    }else{
        $(".error_email").html(""); // вот тут обнуляю значение
    }

    if(/\w+@\w+\.\w+/.test(email)){
        $(".error_veri").html("");
        $(this).find("[name='email']").after("<p class='error_veri error'>вы неправильно заполнили почту!</p>");
    }else{
        $(".error_veri").html(""); // вот тут обнуляю значение
    }

    if(password == ""){
        $(".error_password").html("");
        $(this).find("[name='password']").after("<p class='error_password error'>вы не заполнили пароль</p>");
    } else{
        $(".error_password").html(""); // вот тут обнуляю значение
    }
    if(password != confirm){
        $(".error_confirm").html("");
        $(this).find("[name='confirm']").after("<p class='error error_confirm'>у вас не совпадают пароли!</p>");
    } else{
        $(".error_confirm").html("");
    }
    if(check[0].checked == false){
        $(".error_check").html("");
        $(this).find("[name='check']").after("<p class='error_check error'>вы не дали согласия</p>");
    } else{
        $(".error_check").html(""); // вот тут обнуляю значение
    }

    } else{
        alert("форма успешно отправлена");
        $("form").slideUp();
    }
})

let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].onblur = function(){
 $(window).keydown(function(e){
     if(e.keyCode == 27){
        $("form").slideUp();
     } else if(e.keyCode == 32){
        $("form").show();
     } else if(e.keyCode == 49){
        $("form").removeClass("danger");
         $(".wrapper").css("background-image", "url('https://images.pexels.com/photos/2325303/pexels-photo-2325303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')");
         $("form").addClass("dark");
     } else if(e.keyCode == 50){
        $("form").removeClass("dark");
        $(".wrapper").css("background-image", "url('https://images.pexels.com/photos/1387826/pexels-photo-1387826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')");
        $("form").addClass("danger");
     } else if(e.keyCode == 51){
        $("form").removeClass("dark");
        $("form").removeClass("danger");
        $(".wrapper").css("background-image", "url('https://images.pexels.com/photos/1830217/pexels-photo-1830217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')");
     }
 })
}
}
//     на кнопки 1 - один фон, на 2 - второй, на 3 - третий фон 




