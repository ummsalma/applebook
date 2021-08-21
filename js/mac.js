function start() {
    calculate()
}

function calculatesecond(taka) {


    document.getElementById("total").innerText = taka
    // document.getElementById("total").innerText = taka

}

function calculate() {
    const memoryinnerText = document.getElementById('ex-memory-cost').innerText
    const storageinnerText = document.getElementById('ex-storage-cost').innerText
    const deliveryinnerText = document.getElementById('delivery-cost').innerText
    const totaltaka = parseInt(memoryinnerText) + parseInt(storageinnerText) + parseInt(deliveryinnerText) + 1299
    document.getElementById('in-total-cost').innerText = totaltaka
    calculatesecond(totaltaka)
}
document.getElementById('sixteen-memory').addEventListener('click', function () {
    const exMemoryCost = document.getElementById('ex-memory-cost')
    const priceExmemory = 180
    exMemoryCost.innerText = priceExmemory
    // exMemory(true)
    start()

})
document.getElementById('eight-memory').addEventListener('click', function () {
    const exMemoryCost = document.getElementById('ex-memory-cost')
    const priceExmemory = 0

    exMemoryCost.innerText = priceExmemory
    // exMemory(false)
    start()

})
document.getElementById('pri-storage').addEventListener('click', function () {
    const exStorageCost = document.getElementById('ex-storage-cost')
    const priceExStorage = 0
    exStorageCost.innerText = priceExStorage
    // storage(0)
    start()
})
document.getElementById('sec-storage').addEventListener('click', function () {
    const exStorageCost = document.getElementById('ex-storage-cost')
    const priceExStorage = 100
    exStorageCost.innerText = priceExStorage
    // storage(1)
    start()
})
document.getElementById('tertiary-storage').addEventListener('click', function () {
    const exStorageCost = document.getElementById('ex-storage-cost')
    const priceExStorage = 180
    exStorageCost.innerText = priceExStorage
    // storage(2)
    start()
})
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost')
    const priceDelivery = 0
    deliveryCost.innerText = priceDelivery
    // delivery(0)
    start()
})
document.getElementById('early-delivery').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost')
    const priceDelivery = 20
    deliveryCost.innerText = priceDelivery
    // delivery(1)
    start()
})
document.getElementById("cupon-button").addEventListener('click', function () {
    discountOffer()

})
function discountOffer() {
    // const cuponValue = document.getElementById("cupon-button")
    const sumetion = parseInt(document.getElementById("total").innerText)
    if (document.getElementById("cupon-button").value === 'stevekaku') {
        const discount = 80 / 100
        sumetion = sumetion * discount

    }
}