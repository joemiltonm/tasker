
import LocalStrategy from 'passport-local'
import bcrypt from 'bcryptjs'


const localStrategy = new LocalStrategy({usernameField:'username', passwordField:'password'},
                            
                async function(username, password, done){
                    const hashedPassword = await bcrypt.hash(password, 10)

                    const user = {
                        username, 
                        hashedPassword
                    }

                    console.log(user)

                    done(null,user)
                })



export default localStrategy