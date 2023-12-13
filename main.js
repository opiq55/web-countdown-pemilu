const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const pemilu = "14 february 2024"
const countdown = () => {
    const pemiluDate = new Date(pemilu)
    const hariSekarang = new Date()
    const totalDetik = (pemiluDate - hariSekarang) / 1000
    const hari = Math.floor(totalDetik / 3600 / 24)
    const jam = Math.floor(totalDetik / 3600) % 24
    const menit = Math.floor(totalDetik / 60) % 60
    const detik = Math.floor(totalDetik) % 60

    days.innerText = hari
    hours.innerText = jam
    minutes.innerText = menit
    seconds.innerText = detik
    console.log(hari, jam , menit, detik)
}
countdown()
setInterval(countdown, 1000)