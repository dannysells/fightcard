



const dom = {
    height: 184, 
    style: "Basketball",
    weight: 80,
    strength: "Ball Handling",
    weakness: "Mario",
    special: "Throws balls",
}

function showDom(){ 
    console.log('dom clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-dom">
        <img class="fighterphoto" src="images/dom.jpg">
        <div class="fight-stats-dom">
            <h1>Domantas The G</h1>
            <p>Height: ${dom.height}cm</p>
            <p>Style: ${dom.style}</p>
            <p>Weight: ${dom.weight}kg</p>
            <p>Strength: ${dom.strength}</p>
            <p>Weakness: ${dom.weakness}</p>
            <p>Special move: ${dom.special}</p>
        </div>    
    </div>
    `
}

const alex = {
    height: 184, 
    style: "Karati",
    weight: 79,
    strength: "Tall",
    weakness: "Poker Nights",
    special: "Leg kicks",
}

function showAlex(){ 
    console.log('alex clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-alex">
        <img class="fighterphoto" src="images/alex.jpg">
        <div class="fight-stats-alex">
            <h1>Alex the Karati Kid</h1>
            <p>Height: ${alex.height}cm</p>
            <p>Style: ${alex.style}</p>
            <p>Weight: ${alex.weight}kg</p>
            <p>Strength: ${alex.strength}</p>
            <p>Weakness: ${alex.weakness}</p>
            <p>Special move: ${alex.special}</p>
        </div>    
    </div>
    `
}

const dani = {
    height: "Not tall enough", 
    style: "Boxing",
    weight: 72,
    strength: "Business",
    weakness: "Short blondes and psychotic brunnettes",
    special: "Public speeches",
}

function showDani(){
    console.log('dani clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-dani">
        <img class="fighterphoto" src="images/dani.JPG">
        <div class="fight-stats-dani">
            <h1>Danny the Sigma</h1>
            <p>Height: ${dani.height}</p>
            <p>Style: ${dani.style}</p>
            <p>Weight: ${dani.weight}kg</p>
            <p>Strength: ${dani.strength}</p>
            <p>Weakness: ${dani.weakness}</p>
            <p>Special move: ${dani.special}</p>
        </div>    
    </div>
    `
}

const mathew = {
    height: 150, 
    style: "Glasses",
    weight: 40,
    strength: "Standerdized tests",
    weakness: "Women (fumbles them)",
    special: "Marker usage",
}

function showMathew(){ 
    console.log('mathew clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-mathew">
        <img class="fighterphoto" src="images/mathew.jpg">
        <div class="fight-stats-mathew">
            <h1>Mathew AKA Academic Weapon</h1>
            <p>Height: ${mathew.height}cm</p>
            <p>Style: ${mathew.style}</p>
            <p>Weight: ${mathew.weight}kg</p>
            <p>Strength: ${mathew.strength}</p>
            <p>Weakness: ${mathew.weakness}</p>
            <p>Special move: ${mathew.special}</p>
        </div>    
    </div>`
}

const tima = {
    height: "Unkown", 
    style: "Wreslting",
    weight: 100,
    strength: "Weight",
    weakness: "Eggs",
    special: "Grappling",
}

function showTima(){ 
    console.log('tima clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-tima">
        <img class="fighterphoto" src="images/tima.jpg">
        <div class="fight-stats-tima">
            <h1>Tima the Egg</h1>
            <p>Height: ${tima.height}</p>
            <p>Style: ${tima.style}</p>
            <p>Weight: ${tima.weight}kg</p>
            <p>Strength: ${tima.strength}</p>
            <p>Weakness: ${tima.weakness}</p>
            <p>Special move: ${tima.special}</p>
        </div>    
    </div>
    `
}

const sasha = {
    height: "Past the clouds", 
    style: "Hockey (KSI punches)",
    weight: 80,
    strength: "Math",
    weakness: "Being on time",
    special: "Sticks",
}

function showSasha(){ 
    console.log('sasha clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-sasha">
        <img class="fighterphoto" src="images/sasha.jpg">
        <div class="fight-stats-sasha">
            <h1>Sasha K AKA The big Lank</h1>
            <p>Height: ${sasha.height}</p>
            <p>Style: ${sasha.style}</p>
            <p>Weight: ${sasha.weight}kg</p>
            <p>Strength: ${sasha.strength}</p>
            <p>Weakness: ${sasha.weakness}</p>
            <p>Special move: ${sasha.special}</p>
        </div>    
    </div>
    `
}

const george = {
    height: 184, 
    style: "Cdoing / Twitter",
    weight: 75,
    strength: "Smart",
    weakness: "None",
    special: "Computer",
}

function showGeorge(){ 
    console.log('george clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-george">
        <img class="fighterphoto" src="images/george.JPG">
        <div class="fight-stats-george">
            <h1>George the Man</h1>
            <p>Height: 184cm</p>
            <p>Style: ${george.style}</p>
            <p>Weight: ${george.weight}kg</p>
            <p>Strength: ${george.strength}</p>
            <p>Weakness: ${george.weakness}</p>
            <p>Special move: ${george.special}</p>
        </div>    
    </div>
    `
}

const sigmaduo = {
    height: "Infinite", 
    style: "Boxing / Hockey",
    weight: "Mystical",
    strength: "Money and business",
    weakness: "Milan clubs",
    special: "Double rizz",
}

function showSigmaduo(){
    console.log('sigma duo clicked')

    document.querySelector("#data").
    innerHTML = `
    <div class="fight-card-sigmaduo">
        <img class="fighterphoto" src="images/doubeltrbl.jpg">
        <div class="fight-stats-sigmaduo">
            <h1>Money Top G Stole your girl Double trouble</h1>
            <p>Height: ${sigmaduo.height}</p>
            <p>Style: ${sigmaduo.style}</p>
            <p>Weight: ${sigmaduo.weight}</p>
            <p>Strength: ${sigmaduo.strength}</p>
            <p>Weakness: ${sigmaduo.weakness}</p>
            <p>Special move: ${sigmaduo.special}</p>
        </div>    
    </div>
    `
}

