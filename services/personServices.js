import personD from "../dataAccessObject/person.js"


class personService{
    createPerson(personDto){
        console.log(personDto)
        const {firstName, lastName, email} = personDto
        console.log("firstname dto ", firstName)
        personD.createPerson(firstName, lastName, email)
    }
}

const personServices = new personService()

export default personServices