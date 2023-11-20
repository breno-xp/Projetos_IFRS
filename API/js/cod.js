let popUp = document.querySelector('#popUp');
let popButton = '<br><br><button onclick="closePop()">Ok</button';
let search = document.querySelector('#country');
const box = document.querySelector('#box');
let box2c1 = document.querySelector('#c1');
let box2c2 = document.querySelector('#c2');
let box2c3 = document.querySelector('#c3');
let br = '';

function closePop() {
    popUp.style.display = 'none';
    popUp.innerHTML = '';
}

search.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        document.querySelector('#mButton').click();
        search.value = '';
    }
});

if (!localStorage.getItem('tutorial') || localStorage.getItem('tutorial') == 'undefined') {
    popUp.innerHTML = `Welcome, this website is created to test my abilities with API. This site will look for some statistics related to COVID-19 depending on your input. Please note that these numbers are outdated and therefore merely illustrative. ${popButton}`;
    popUp.style.display = 'block';


    window.addEventListener('click', function handler(e) {

        if (!popUp.contains(e.target)) {
            this.removeEventListener('click', handler);
            closePop();
        }
    })
}

localStorage.setItem('tutorial', 1);


async function test() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a0db4fb9fcmsh944233412690933p1f5444jsn23bbfb7633ee',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    try {
        const url = 'https://covid-193.p.rapidapi.com/statistics';
        let ans = await fetch(url, options);
        obj = await ans.json();
        console.log(obj);
    } catch (err) {
        console.log(err);
    }
}

test();

async function find() {
    let value = (search.value).toLowerCase();
    let word = '';


    if (value == '') {
        search.value = '';
        search.setAttribute('placeholder', `No results, check your writing`);
        await delay(2000);
        search.setAttribute('placeholder', ``);
        return;
    }

    for (i = 0; i < value.length; i++) {
        if (value[i] == ' ')
            word += '-';
        else
            word += value[i];
    }

    switch (word) {
        case 'united-states':
            word = 'usa';
            break;
        case 'united-states-of-america':
            word = 'usa';
            break;
        case 'america':
            word = 'usa';
            break;
        case 'great-britain':
            word = 'uk';
            break;
        case 'united-kingdom':
            word = 'uk';
            break;
        case 'englang':
            word = 'uk';
            break;
        case 'scotland':
            word = 'uk';
            break;
    }

    for (i = 0; i < obj.response.length; i++) {
        if (obj.response[i].country.toLowerCase() == word && word != 'africa' && word != 'asia' && word != 'oceania' && word != 'europe' && word != 'north-america' && word != 'south-america') {
            console.log(obj.response[i]);
            box2c1.innerHTML = `<strong>Country:</strong> ${obj.response[i].country} ⠀⠀⠀${br}<strong>Continent:</strong> ${obj.response[i].continent} ⠀⠀⠀${br}<strong>Day:</strong> ${obj.response[i].day}`;
            box2c2.innerHTML = `<strong>Population:</strong> ${obj.response[i].population} ⠀⠀⠀${br}<strong>Total amount of tests:</strong> ${obj.response[i].tests.total}`;
            box2c3.innerHTML = `<strong>Tests / Population:</strong> ${(obj.response[i].tests.total / obj.response[i].population).toFixed(2)}`;
            let top = 0;
            document.querySelectorAll('.card').forEach(async (card) => {
                card.style.display = 'block';
                card.style.top = top + "px";
                top += card.clientHeight - 20;
                await delay(100);
                card.style.left = "0%";
            })
            break;
        }
        console.log(`index: ${i}  ${obj.response[i].country.toLowerCase() == word}`)

        if (i == obj.response.length - 1) {
            search.value = '';
            search.setAttribute('placeholder', `No results, check your writing`);
            await delay(2000);
            search.setAttribute('placeholder', ``);
        }

    }

}

async function delay(mls) {
    return new Promise(resolve => {
        setTimeout(resolve, mls)
    })
}

