// Portugues
$(function() {
    $(".br").click(function() {
        $(".menu").children().eq(0).text("Home")
        $(".menu").children().eq(1).text("Blog")
        $(".menu").children().eq(2).text("Sobre mim")
        $(".language-selected").text("pt-BR")
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass(".change-br")
    })
})

// Inglês

$(function() {
    $(".en").click(function() {
        $(".menu").children().eq(0).text("Home")
        $(".menu").children().eq(1).text("Blog")
        $(".menu").children().eq(2).text("About me")
        $(".language-selected").text("en")
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass(".change-en")
    })
})