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

//évènement ouverture de calendrier
case1.addEventListener('click',function(){
    const contenuCase = case1.lastElementChild.innerText;
    console.log(contenuCase);
    if(contenuCase <= aujourdhui){
        console.log('case 1 ouverte');
        window.open("https://scratch.mit.edu/projects/622263363","popup")
        case1.classList.toggle('open');

    }else{
        console.log("wait for it ! you're too curious")
    }
})
    
    

