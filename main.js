import { KUTYAK } from "./adat.js";
function main(){
    megjelenites();
    csokkenoNovekvo();   
    hozzaad();

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
    const KUTYAK_TABLAZAT = document.getElementById("divKutyak");
    let segedValtozo = `<table>`
    segedValtozo += `<td>nev</td>`
    segedValtozo += `<td class="novekvo">ev</td>`
    segedValtozo += `<td>fajta</td>`
    ev[0].addEventListener("click",function(){
        KUTYAK.sort(function(a, b){return b.Ev-a.Ev});
        for (let index = 0; index < KUTYAK.length; index++) {
            segedValtozo += `<tr>`
            segedValtozo += `<td>${KUTYAK[index].nev}</td>`
            segedValtozo += `<td>${KUTYAK[index].Ev}</td>`
            segedValtozo += `<td>${KUTYAK[index].fajta}</td>`
            segedValtozo += `</tr>`
        }
        segedValtozo += `</table>`
        KUTYAK_TABLAZAT.innerHTML = segedValtozo;
    });
}

function hozzaad(){
    const KUTYA_INPUT = document.getElementById("hozzadKutya");
    let segedValtozo = `<form action="#">`;
    segedValtozo += `<label for="kutyaNeve">Kutya neve:</label>`;
    segedValtozo += `<input type="text" id="kutyaNeve" name="kutyaNeve"><br><br>`;
    segedValtozo += `<label for="kutyaEve">Eve:</label>`;
    segedValtozo += `<input type="number" id="kutyaEve" name="kutyaEve"><br><br>`;
    segedValtozo += `<label for="kutyaFajta">Fajta:</label>`;
    segedValtozo += `<input type="text" id="kutyaFajta" name="kutyaFajta"><br><br>`;
    segedValtozo += `</form>`;
    segedValtozo += `<button class="hozzadBtn">hozzadas</button>`
    KUTYA_INPUT.innerHTML += segedValtozo;
    const KUTYA_HOZZAD_BTN = document.getElementsByClassName("hozzadBtn");
    const KUTYA_NEV = document.getElementById("kutyaNeve");
    const KUTYA_EV = document.getElementById("kutyaEve");
    const KUTYA_FAJTA = document.getElementById("kutyaFajta");
    const KUTYAK_TABLAZAT = document.getElementById("divKutyak");

    KUTYA_HOZZAD_BTN[0].addEventListener("click",function(){
        let segedValtozo = `<table>`
        segedValtozo += `<td>nev</td>`
        segedValtozo += `<td class="novekvo">ev</td>`
        segedValtozo += `<td>fajta</td>`
        const UJ_KUTYA = {
            nev: KUTYA_NEV.value,
            ev: parseInt(KUTYA_EV.value),
            fajta: KUTYA_FAJTA.value
        };
        KUTYAK.push(UJ_KUTYA);
      
        for (let index = 0; index < KUTYAK.length; index++) {
            segedValtozo += `<tr>`
            segedValtozo += `<td>${KUTYAK[index].nev}</td>`
            segedValtozo += `<td>${KUTYAK[index].Ev}</td>`
            segedValtozo += `<td>${KUTYAK[index].fajta}</td>`
            segedValtozo += `</tr>`
        }
        segedValtozo += `</table>`
        KUTYAK_TABLAZAT.innerHTML = segedValtozo;
        csokkenoNovekvo();
    });
}    
    
      

main();