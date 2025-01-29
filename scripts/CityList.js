import { getWalkers } from "./database.js"
import { getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvt) => {
        const cityTarget = clickEvt.target
        const citiesId = cityTarget.dataset.walkername

        for( const walker of walkers)
        if (cityTarget.dataset.type === "city" && walker.cityId === parseInt(citiesId)) {
            
            window.alert(`${walker.name} is servicing this city`)
        
        }
    }
)



export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li data-type="city" data-walkername="${city.id }">${city.name}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

