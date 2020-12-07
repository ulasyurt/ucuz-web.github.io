function ChangeLanguage(langID){
    if(langID=="0"){localStorage.setItem("langID","0");}
    else if(langID=="1"){localStorage.setItem("langID","1");}
    TranslateHtml();
    $('.navbar-nav.languages .nav-link[data-langID="'+localStorage.getItem("langID")+'"]').addClass("languageActive");
    $('.navbar-nav.languages .nav-link[data-langID!="'+localStorage.getItem("langID")+'"]').removeClass("languageActive");
}
function TranslateHtml(){
    $(".translate").each(function(){
        $(this).html(Translator($(this).attr("data-word")));
    });
}
function Translator(Word){
    if(localStorage.getItem("langID")=="0"){return Word;}
    else if(localStorage.getItem("langID")=="1"){
       switch (Word){
           case "Anasayfa":return "Home Page";
           case "Nasıl Çalışıyoruz":return "Business Logic";
           case "İletişim":return "Contact";
           case "Erişilebilir Profesyonellik":return "Affordable Professionality";
           case "Erişilebilir Kalite":return "Affordable Quality";
           default: return Word;
       }
    }
}