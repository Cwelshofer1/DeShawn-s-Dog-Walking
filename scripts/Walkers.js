import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        let walkerName = whatWasClickedOn.dataset.name
        let walkerId = whatWasClickedOn.dataset.city
        if(whatWasClickedOn.dataset.type === "walker"){
            for (const city of cities) {
                if(city.id === parseInt(walkerId)){
                    window.alert(`This ${walkerName} works in ${city.name}`)
                }
            }
        
        
        }
    }

    

)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li data-id=${walker.id}
                            data-name=${walker.name} 
                            data-type="walker"
                            data-city=${walker.cityId}>
                                ${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

