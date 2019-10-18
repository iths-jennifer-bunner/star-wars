async function getData(){   //skapa async funktion, måste finnas för await ska funka 
    let response = await fetch("https://swapi.co/api/people/")  //fetch och vänta på att förfrpgan ska funka
    let responseBody = await response.json()    //convert och wait for data to be converted to JSON
    return responseBody.results //return the array of users                             
}
// getData()

async function getPlanet(link){
    let response = await fetch(link) 
    let responseBody = await response.json()
    return responseBody.name
}

async function render(){
    let list = await getData()  //call and wait for getData()to return the array of users              
    let ul = document.querySelector("ul")   //store the <ul> tag     
    let itemPrototype = document.querySelector(".prototype")  //store the <class="prototype"> tag         
    for(let item of list){                                   
        let newItem = itemPrototype.cloneNode(true) //copy the prototype and remove the prototype class                             
        newItem.classList.remove("prototype")
        let p = newItem.querySelector("p")//change the text of the paragraph inside the prototype           
        p.innerText = item.name
        ul.append(newItem)//add it to the <ul> tag
        newItem.addEventListener("click",async function(){//lägger till en addEventListener och inom (säger till "beteendet")
            let text = document.body.querySelector(".text")
            let homeworld = await getPlanet(item.homeworld) //call and await for the getPlanet() to return the array of users och där har vi även lagt in (item.homeworld) till funktionen, vilket är "länken"
            text.innerText = homeworld
        })
    }
}
render()//start the progress     










