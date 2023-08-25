$("#aumentar").on("click" , function(){
    $("#caixa").animate({width:"500px",height:"500px"})
});

$("#diminuir").on("click" , function(){
    $("#caixa").animate({width:"300px"}).animate({height:"200px"})
});

$("#direita").on("click" , function(){
    $("#caixa").animate({marginLeft:"300px"}),({duration: 1000
        // ,complete:() => {alert("terminou a animação")}
    })
});

$("#esquerda").on("click" , function(){
    $("#caixa").animate({marginLeft: "0px"})
});

$("#sumir").on("click" , function(){
    $("#caixa").fadeOut(1000)
    // $("#caixa").ride(500)
});

$("#aparecer").on("click" , function(){
    $("#caixa").fadeIn(1000)
    // $("#caixa").show(500)
});

$("#subir").on("click" , function(){
    $("#caixa").slideUp(500)
});

$("#descer").on("click" , function(){
    $("#caixa").slideDown(500)
});

$("#trocar").on("click" , function(){
    // $("#caixa").fadeToggle(500)
    $("#caixa").slideToggle(500)
    // slide toggle fica bom para o menu hamburguer
});

// $("#desativar").on("click" , function(){
//     $("#caixaDeTexto").attr("disabled","true")
//     $("#caixaDeTexto").css("backgroundColor","lightsalmon") 
// });
// attr - adicionar atributos