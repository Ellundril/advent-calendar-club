//récupération des cases du calendrier
const case1 = document.getElementById('case1')
const case2 = document.getElementById('case2')
const case3 = document.getElementById('case3')
const case4 = document.getElementById('case4')
const case5 = document.getElementById('case5')
const case6 = document.getElementById('case6')
const case7 = document.getElementById('case7')
const case8 = document.getElementById('case8')
const case9 = document.getElementById('case9')
const case10 = document.getElementById('case10')
const case11 = document.getElementById('case11')
const case12 = document.getElementById('case12')
const case13 = document.getElementById('case13')
const case14 = document.getElementById('case14')
const case15 = document.getElementById('case15')
const case16 = document.getElementById('case16')
const case17 = document.getElementById('case17')
const case18 = document.getElementById('case18')
const case19 = document.getElementById('case19')
const case20 = document.getElementById('case20')
const case21 = document.getElementById('case21')
const case22 = document.getElementById('case22')
const case23 = document.getElementById('case23')
const case24 = document.getElementById('case24')

//récupération de la div chiffre


//récupération de la date
const today = new Date();
const aujourdhui = today.getDate();
const mois = today.getMonth();
console.log(aujourdhui);
console.log("mois", mois);
console.log(today);



function ouverture(caseClique,url){
    const contenuCase = caseClique.lastElementChild.innerText;
    console.log(contenuCase);
    //Pensee à modifier le mois en 11
    if(contenuCase <= aujourdhui && mois===11){
        console.log('"caseClique" ouverte');
        window.open(url,PictureInPictureWindow)
        caseClique.classList.add('open');
    }else{
        console.log("wait for it ! You're too curious")  
        //organiser l'apparition d'une fenêtre avec le message you're too curious !
       window.alert("Wait for it ! You're too curious !")
    }
}


//évènements ouverture de calendrier pour chaque case
case1.addEventListener('click', function(){
ouverture(case1, "https://scratch.mit.edu/projects/1247571502");//bataille intergalactique de Maxime
});

case2.addEventListener('click', function(){
    ouverture(case2, "https://scratch.mit.edu/projects/1173367050")});//jeu gold clicker de Jules

case3.addEventListener('click', function(){
    ouverture(case3, "https://scratch.mit.edu/projects/1081599395")});//sticky man Timéo

case4.addEventListener('click', function(){
    ouverture(case4, "https://scratch.mit.edu/projects/1098718656")});//jeu Universe war de Stan

case5.addEventListener('click', function(){
    ouverture(case5, "https://scratch.mit.edu/projects/1171240961")});//jeu de Lino galaxy shooter

case6.addEventListener('click', function(){
    ouverture(case6, "https://scratch.mit.edu/projects/1180436313")});//jeu de Jules Neon snakes

case7.addEventListener('click', function(){
    ouverture(case7, "https://scratch.mit.edu/projects/1250489384")});//jeu fantôme Hadrien

case8.addEventListener('click', function(){
    ouverture(case8, "https://scratch.mit.edu/projects/1251270279")});//jeu balle Lana

case9.addEventListener('click', function(){
    ouverture(case9, "https://scratch.mit.edu/projects/1194095378")});// jeu asteroeide fusée Jules

case10.addEventListener('click', function(){
    ouverture(case10, "https://scratch.mit.edu/projects/1251272970")});//jeu de renard voiture Mia

case11.addEventListener('click', function(){
    ouverture(case11, "https://scratch.mit.edu/projects/622263363")});//jeu perroquet volant Vio

case12.addEventListener('click', function(){
    ouverture(case12, "https://scratch.mit.edu/projects/1177487090")});//neon pong jeu de Lino

case13.addEventListener('click', function(){
    ouverture(case13, "https://scratch.mit.edu/projects/1197116753")});//jeu de Jules scratch cat clicker

case14.addEventListener('click', function(){
    ouverture(case14, "https://scratch.mit.edu/projects/1251284084")});//jeu avion de chasse Adriel

case15.addEventListener('click', function(){
    ouverture(case15, "https://scratch.mit.edu/projects/1251285808")});//jeu Taylor le prince

case16.addEventListener('click', function(){
    ouverture(case16, "https://scratch.mit.edu/projects/1135584509")});//jeu de voiture Jules

case17.addEventListener('click', function(){
    ouverture(case17, "https://scratch.mit.edu/projects/1081558063")});//jeu fantome et balle Taylor

case18.addEventListener('click', function(){
    ouverture(case18, "https://scratch.mit.edu/projects/1255010012")});// jeu instruments de musique Vio

case19.addEventListener('click', function(){
    ouverture(case19, "https://scratch.mit.edu/projects/1246041796")});//jeu flèche Taylor

case20.addEventListener('click', function(){
    ouverture(case20, "https://scratch.mit.edu/projects/1255091809")});//jeu soucoupe volante Abigaël

case21.addEventListener('click', function(){
    ouverture(case21, "https://scratch.mit.edu/projects/1222364881")});//jeu révolte des robots Félix

case22.addEventListener('click', function(){
    ouverture(case22, "")});

case23.addEventListener('click', function(){
    ouverture(case23, "")});

case24.addEventListener('click', function(){
    ouverture(case24, "")});


    
    

