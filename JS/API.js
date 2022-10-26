const URL_DOLAR = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
const DOLAR_BAR = document.getElementById('dolar-bar')
const exchangesIndexes = {official:0, blue:1, btc:5}





fetch(URL_DOLAR)
    .then(
        response => response.json()
    )
    .then(
        (data) => {
            console.log(data)
            DOLAR_BAR.innerHTML +=`<div>Nuestras cotizaciones</div>`
            for (const index of Object.values(exchangesIndexes)) {
                if(index == 5){
                DOLAR_BAR.innerHTML +=`
                <div>
                    ${data[index]["casa"]["nombre"]}(USD):
                    $${data[index]["casa"]["compra"]}
                </div>`
                continue
                }
                DOLAR_BAR.innerHTML += `
                <div>
                    ${data[index]["casa"]["nombre"]}:
                    $${data[index]["casa"]["compra"]}
                </div>`
            }
            console.log(data[exchangesIndexes.official]["venta"])
        }
    )