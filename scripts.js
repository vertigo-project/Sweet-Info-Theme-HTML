setInterval(function () { bgchange(); }, 6000);

preloads = "bg.jpg,bg2.jpg,bg3.jpg".split(",");
var tempImg = [];

for(var x=0;x<preloads.length;x++) {
    tempImg[x] = new Image();
    tempImg[x].src = preloads[x];
}

function bgchange()
{
    var bg;
    var Wide = screen.width;
    var a = Math.random()*4;
    a=Math.floor(a);
    
    if (Wide >= 1600)  document.getElementById("welcome").style.marginTop = "16%";
    if(a==0) bg = "url('bg.jpg')";
    if(a==1) bg = "url('bg2.jpg')";
    if(a==3) bg = "url('bg3.jpg')";

    document.body.style.transition = "all 0.4s";
    document.body.style.backgroundImage = bg;
}
function eksport(kod)
{
    var u=document.getElementById("fullarticle");
    u.innerHTML=kod;
}
function faduj()
{
    var thisdiv = document.getElementById("fullarticle");

    thisdiv.style.opacity=0;
    $(thisdiv).animate({opacity: 1}, 650);
}
function start()
{
    var txt = "<div id=\"welcome\">Witaj na SweetInfo Theme ! <p id=\"sentence\">Szablonie stworzonym przez <a href=\"http://a.test10.besaba.com/\" id=\"vertigo\">Vertigo Project</div>";
   
    faduj();
    eksport(txt);
}
function about()
{
    var txt = "<div id=\"whiteblock\"><div id=\"title\">O Nas</div><div id=\"txt\">SweetInfo Theme jest szablonem stworzonym przez <a href=\"http://a.test10.besaba.com/\">Vertigo Project</a>, bazującym na najnowszych rozwiązaniach i trendach w sieci oferujących nowoczesny wygląd strony.</div></div>";
   
    faduj();
    eksport(txt);
}
function contact()
{
    var txt = "<div id=\"whiteblock\"><div id=\"title\">Kontakt</div><div id=\"txt\" style=\"text-indent:0;\">E-mail: <a href=\"mailto:formoza@autistici.org\">formoza@autistici.org</a><br />Właściciel: Kamil Wiśniewski <a href=\"http://a.test10.besaba.com/\">A.Test10</a><br />Cena: Do negocjacji</div></div>";
   
    faduj();
    eksport(txt);
}
function rules()
{
    var txt = "<div id=\"whiteblock\"><div id=\"title\">Zasady</div><div id=\"txt\" style=\"text-indent:0;\"><p>§1 Regulamin <br /><br /> - Pkt 1.<br />- Pkt 2.<br />- Pkt 3.</p></p>§2 Ogólne zasady<br /><br />- Pkt 1. <br />- Pkt 2. <br />- Pkt 3.<br />- Pkt 4. <br />- Pkt 5. </p><p>§3 Prawa<br /><br />- Pkt 1. <br />- Pkt 2. <br />- Pkt 3. <br />- Pkt 4.</p></div></div>";
   
    faduj();
    eksport(txt);
}
function services()
{
    var txt = "<div id=\"whiteblock\"><div id=\"title\">Usługi</div><div id=\"txt\" style=\"text-indent:0;\">- Przejrzytość strony <br />- Intuicyjna nawigacja<br />- Łatwość edycji kodu<br />- Nowoczesny wygląd<br />- Szybkość wczytywania<br />- Zgodnośc wyświetlania na różnych platformach<br /><br /><span style=\"font-size:15px;\"><a href=\"http://a.test10.besaba.com/\">Vertigo Project</a></span></div></div></div>";
   
    faduj();
    eksport(txt);
}