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
console.log(aujourdhui);



function ouverture(caseClique,url){
    const contenuCase = caseClique.lastElementChild.innerText;
    console.log(contenuCase);
    if(contenuCase <= aujourdhui){
        console.log('"caseClique" ouverte');
        window.open(url,PictureInPictureWindow, "popup")
        caseClique.classList.toggle('open');
    }else{
        console.log("wait for it ! You're too curious")
    }
}

//évènements ouverture de calendrier pour chaque case
case1.addEventListener('click', function(){
    ouverture(case1, "")});

case2.addEventListener('click', function(){
    ouverture(case2, "")});

case3.addEventListener('click', function(){
    ouverture(case3, "")});

case4.addEventListener('click', function(){
    ouverture(case4, "")});

case5.addEventListener('click', function(){
    ouverture(case5, "")});

case6.addEventListener('click', function(){
    ouverture(case6, "")});

case7.addEventListener('click', function(){
    ouverture(case7, "")});

case8.addEventListener('click', function(){
    ouverture(case8, "")});

case9.addEventListener('click', function(){
    ouverture(case9, "")});

case10.addEventListener('click', function(){
    ouverture(case10, "")});

case11.addEventListener('click', function(){
    ouverture(case11, "")});

case12.addEventListener('click', function(){
    ouverture(case12, "")});

case13.addEventListener('click', function(){
    ouverture(case13, "")});

case14.addEventListener('click', function(){
    ouverture(case14, "")});

case15.addEventListener('click', function(){
    ouverture(case15, "")});

case16.addEventListener('click', function(){
    ouverture(case16, "")});

case17.addEventListener('click', function(){
    ouverture(case17, "")});

case18.addEventListener('click', function(){
    ouverture(case18, "")});

case19.addEventListener('click', function(){
    ouverture(case19, "")});

case20.addEventListener('click', function(){
    ouverture(case20, "")});

case21.addEventListener('click', function(){
    ouverture(case21, "")});

case22.addEventListener('click', function(){
    ouverture(case22, "")});

case23.addEventListener('click', function(){
    ouverture(case23, "")});

case24.addEventListener('click', function(){
    ouverture(case24, "")});


    
    

