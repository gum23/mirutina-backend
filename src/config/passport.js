import passport from 'passport';
import LocalStrategy from 'passport-local';
import { compareHashAndPass, createHash } from '../utils/bcrypt.utils.js';

//Managers
import InstructorManager from '../dao/managers/InstructorManager.js';
import UserManager from '../dao/managers/UserManager.js';

//modelos
import instructorsModel from '../dao/schema/instructors.schema.js';
import usersModel from '../dao/schema/users.schema.js';

export const initializePassport = () => {
    passport.use('register', new LocalStrategy.Strategy(
        {usernameField: "email", passReqToCallback: true},
        async(req, username, password, done) => {
            try {
                const user = req.body;
                
                if (user.role == "instructor") {
                    const instructorFound = await instructorsModel.findOne({email: username});
                    if(instructorFound) return done("Error, el instructor ya está registrado");

                    let passwordCrypt = await createHash(password);
                    
                    const newInstructor = new InstructorManager(
                        user.name,
                        user.province,
                        user.city,
                        username,
                        passwordCrypt
                    )
                    
                    const result = await instructorsModel.create(newInstructor);
                    return done(null, result);

                } else if(user.role == "usuario"){
                    const userFound = await usersModel.findOne({email: username});
                    if(userFound) return done("Error, el usuario ya está registrado");

                    let passwordCrypt = await createHash(password);
                    
                    const newUser = new UserManager(
                        user.name,
                        user.lastName,
                        user.province,
                        user.city,
                        username,
                        passwordCrypt
                    )
                    
                    const result = await usersModel.create(newUser);
                    return done(null, result);
                }
            } catch (error) {
                return done(`Error al crear el usuario`, error);
            }
        }
    ));

    passport.use('login', new LocalStrategy.Strategy(
        {usernameField: 'email', passReqToCallback: true},
        async(req, username, password, done) => {
            const userData = req.body;
            
            try {
                if(userData.role == "instructor"){

                    const user = await instructorsModel.findOne({email: username});
                    if(!user) return done(null, false);
    
                    const comparePass = compareHashAndPass(password, user);
                    if(comparePass == false) return done(null, false);
    
                    return done(null, user);
    
                } else if(userData.role == "usuario"){
    
                    const user = await usersModel.findOne({email: username});
                    if(!user) return done(null, false);
    
                    const comparePass = compareHashAndPass(password, user);
                    if(comparePass == false) return done(null, false);
    
                    return done(null, user);
    
                }
            } catch (error) {
                return done("Error al ingresar", error);
            }

        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    })
}