
import personService from "../services/personServices.js"


class PersonController{
    // this fun is not supposed to know the data layer 
    createPerson(req,res){
        
        const person = personService.createPerson(req.body)

        res.status(201).json(person)

    }
}



const personController = new PersonController

export default personController