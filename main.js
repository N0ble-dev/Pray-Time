let hijri = document.getElementById("hijri")
let miladi = document.getElementById("miladi")
let currentCity=document.getElementById("curent")
let prays = Array.from(document.querySelectorAll("#pray"))
let selectElement = document.getElementById('category');
let city="Ad Daqahlīya"

async function getData ()
{
    try {
        let myData = await fetch(
            `http://api.aladhan.com/v1/timingsByCity?country=EG&city=${city}`
        );
        let response = await myData.json();
        let result = response;
        let salah = result.data.timings
        let { Asr, Dhuhr, Fajr, Maghrib, Isha, Sunrise } = salah
        document.getElementById("Fajr").innerHTML = Fajr
        document.getElementById("Sunrise").innerHTML = Sunrise
        document.getElementById("Dhuhr").innerHTML = Dhuhr
        document.getElementById("Asr").innerHTML = Asr
        document.getElementById("Maghrib").innerHTML = Maghrib
        document.getElementById("Isha").innerHTML = Isha
        hijri.innerHTML = result.data.date.hijri.date + " - " + result.data.date.hijri.month.ar + " - " + result.data.date.hijri.weekday.ar
        miladi.innerHTML = result.data.date.gregorian.date + " - " + result.data.date.gregorian.weekday.en

    } catch (reason) {
        console.log(`Reason: ${reason}`);
    } finally {
        console.log("After Fetch");
    }
}
getData();
selectElement.addEventListener('change', function ()
{
    city=""
    city = selectElement.value;
    const selectedIndex = selectElement.selectedIndex;
    const selectedText = selectElement.options[selectedIndex].text;
    currentCity.innerHTML=selectedText
    getData();
});

