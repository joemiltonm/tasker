import db from '../db/db.js'

class personDAO{
    async createPerson(firstName, lastName, email){
        console.log("first DAO", firstName)
        const [id] = await db('person').insert({
            email, 
            first_name : firstName,
            last_name: lastName
        }). 
        returning('id')
    }
}

const personD = new personDAO()

export default personD