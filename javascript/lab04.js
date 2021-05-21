(function(){
    var App = {
        config:{
            api:{}
        },
        htmlElements:{
            // Forms
            formPal: document.querySelector('#form-pal'),
            formCar: document.querySelector('#form-car'),
            formAnio: document.querySelector('#form-anio'),
            formPrimos: document.querySelector('#form-primos'),
            // Inputs
            inputPal: document.querySelector('#input-pal'),
            inputCar: document.querySelector('#input-car'),
            inputAnio: document.querySelector('#input-anio'),
            inputPrimos: document.querySelector('#input-primos'),
            // <p> Resultados
            palResult: document.querySelector('#pal-resultado'),
            carResult: document.querySelector('#car-resultado'),
            anioResult: document.querySelector('#anio-resultado'),
            primosResult: document.querySelector('#primos-resultado'),
        },
        init: () => {
            App.htmlElements.formPal.addEventListener('submit', (event) => {
                event.preventDefault();
                App.utils.palindromo();
            });
            App.htmlElements.formCar.addEventListener('submit', (event) => {
                event.preventDefault();
                App.utils.cantidadCaracteres();
            });
            App.htmlElements.formAnio.addEventListener('submit', (event) => {
                event.preventDefault();
                App.utils.bisiesto();
            });
            App.htmlElements.formPrimos.addEventListener('submit', (event) => {
                event.preventDefault();
                App.utils.primos();
            })
        },
        events:{
            // Los eventos los puse dentro de las funciones esta ves.
        },
        utils:{
            palindromo: () => {
                let num_temporal, rem, final = 0;
                let numero = Number(App.htmlElements.inputPal.value)
                num_temporal = numero;
                while(numero > 0){
                    rem = numero%10;
                    numero = parseInt(numero/10);
                    final = final*10+rem;
                }
                if(final === num_temporal){
                    App.htmlElements.palResult.innerHTML = `El número ${num_temporal} es palíndromo.`;
                    final = 0;
                } else {
                    App.htmlElements.palResult.innerHTML = `El número ${num_temporal} NO ES palíndromo.`;
                    final = 0;
                }
            },
            cantidadCaracteres: () => {
                let texto = App.htmlElements.inputCar.value
                return [...texto.replace(/\s/g, '')].reduce((objeto, caracter) => { // spread operator
                    objeto[caracter] + 1 || 1;
                    App.htmlElements.carResult.innerHTML = objeto
                    return objeto;
                }, {});
            },
            bisiesto: () => {
                let Anio = App.htmlElements.inputAnio.value;
                let checkYear = (((Anio % 4 == 0) && (Anio % 100 != 0)) || (Anio % 400 == 0)) ? 1 : 0;
                if (! checkYear )  
                    App.htmlElements.anioResult.innerHTML = `El año ${Anio} NO es bisiesto`
                else 
                    App.htmlElements.anioResult.innerHTML = `El año ${Anio} es bisiesto`
            },
            primos: () => {
                let numero = Number(App.htmlElements.inputPrimos.value)
                console.log(numero)
                if (numero == 0 || numero == 1 || numero == 4) App.htmlElements.primosResult.innerHTML = `${numero} NO es primo.`
                    for (let x = 2; x < numero / 2; x++) {
                        if (numero % x == 0) App.htmlElements.primosResult.innerHTML = `${numero} NO es primo.`
                    }
                App.htmlElements.primosResult.innerHTML = `${numero} es primo.`
            }
        }
    }
    App.init();
})();