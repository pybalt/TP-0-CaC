const URL_DOLAR = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
const DOLAR_BAR = document.getElementById('dolar-bar')
const exchangesIndexes = { official: 0, blue: 1, btc: 5 }

window.addEventListener('load', fetchDolarApi);

function retrieveBitcoinDiv(data, index) {
    const DIV = `
    <div>
        ${data[index]["casa"]["nombre"]}(USD):
        $${data[index]["casa"]["compra"]}
    </div>
    `
    return DIV
}

function retrieveDolarDiv(data, index) {
    const DIV = `
    <div>
        ${data[index]["casa"]["nombre"]}:
        $${data[index]["casa"]["compra"]}
    </div>
`
    return DIV
}

function fetchDolarApi() {
    fetch(URL_DOLAR)
        .then(response => response.json())
        .then(function (data) {
            DOLAR_BAR.innerHTML += `<div>Nuestras cotizaciones</div>`

            for (const index of Object.values(exchangesIndexes)) {
                if (index == 5) {
                    DOLAR_BAR.innerHTML += retrieveBitcoinDiv(data, index)
                    continue
                }
                DOLAR_BAR.innerHTML += retrieveDolarDiv(data, index)
            }
        }
        )
}
