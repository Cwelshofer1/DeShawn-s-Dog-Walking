import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet


export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const pet of pets) {
        const walker = walkers.find(w => w.id === pet.walkerId)
        if (walker) {
            const city = cities.find(c => c.id === walker.cityId)
            if (city) {
       
        
        assignmentHTML += `
            <li>
                ${pet.name} is being walked by
                ${walker.name} in ${city.name}
            </li>
        `
                }
            }
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
} 

