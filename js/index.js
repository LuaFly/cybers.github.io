// Portugues
$(function() {
    $(".br").click(function() {
        $(".menu").children().eq(0).children().text("Home")
        $(".menu").children().eq(1).children().text("Blog")
        $(".menu").children().eq(2).children().text("Sobre mim")
        $(".language-selected").text("pt-BR")
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass(".change-br")
    })
})

// Inglês

$(function() {
    $(".en").click(function() {
        $(".menu").children().eq(0).children().text("Home")
        $(".menu").children().eq(1).children().text("Blog")
        $(".menu").children().eq(2).children().text("About me")
        $(".language-selected").text("en")
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass(".change-en")
    })
})