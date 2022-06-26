const alicia = [10, 80, 75];

const bob = [90, 20, 25];

function encontrarGanador(a,b){
    let votosAlicia = 0;
    let votosBob = 0;
    for(i=0; i<a.length ; i++) {
        if (a[i] > b[i]) {
            votosAlicia++;
        }
        else if (a[i] < b[i]) {
            votosBob++;
        }
    }
    return votosAlicia > votosBob? console.log('La ganadora es Alicia'):console.log('El ganador es Bob');
}

encontrarGanador(alicia,bob);
