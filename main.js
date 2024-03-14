import { KUTYAK } from "./adat.js";
function main(){
    megjelenites();
    csokkenoNovekvo();   

}

function megjelenites(){
    const KUTYAK_TABLAZAT = document.getElementById("divKutyak");
    let segedValtozo = `<table>`
    segedValtozo += `<td>nev</td>`
    segedValtozo += `<td class="novekvo">ev</td>`
    segedValtozo += `<td>fajta</td>`
    for (let index = 0; index < KUTYAK.length; index++) {
        segedValtozo += `<tr>`
        segedValtozo += `<td>${KUTYAK[index].nev}</td>`
        segedValtozo += `<td>${KUTYAK[index].Ev}</td>`
        segedValtozo += `<td>${KUTYAK[index].fajta}</td>`
        segedValtozo += `</tr>`
    }
    segedValtozo += `</table>`
    KUTYAK_TABLAZAT.innerHTML += segedValtozo;
}

function csokkenoNovekvo(){
    const ev = document.querySelectorAll(".novekvo");
    let max = KUTYAK[0].Ev;
    ev[0].addEventListener("click",function(){
        KUTYAK.sort(function(a, b){return b.Ev-a.Ev});
        console.log(KUTYAK);
        for (let index = 1; index < KUTYAK.length; index++) {
            if(KUTYAK[index].Ev > max){
                max = KUTYAK[index].Ev;
            }
        }
        console.log(max);
    });
    
    
      
}

main();