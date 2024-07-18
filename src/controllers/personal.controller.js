import Personal from '../dao/schema/personal.schema.js';

export const getPersonals = async (req, res) => {
    try {
        const personals = await Personal.find()
        return res.json(personals)
    } catch (error) {
        res.json(error)
    }
}

export const getPersonal = async (req, res) => {
    try {
        const personalFound = await Personal.findById(req.params.id);
        if(!personalFound) return res.status(204).json();
        res.json(personalFound);
    } catch (error) {
        res.json(error);
    }
}

export const createPersonal = async (req, res) => {

    try {
        const personalFound = await Personal.findOne({dni: req.body.dni}) //Comparamos el dni ingresado con los de la DDBB
    
        if(personalFound){
            return res.status(301).json({message: "El personal ya existe"}) //Corroboramos si existe es personal
        }
        
        const personal = new Personal(req.body);       //Si no existe, crea un nuevo objeto personal
        const savedPersonal = await personal.save();       //Lo guardamos en la DDBB
        res.json(savedPersonal);                     //Mostramos lo que se guardo en la DDBB
        
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor: ${error}`})
    }
    
}

export const updatePersonal = async (req, res) => {
    try {
        const pesonalUpdate = await Personal.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!pesonalUpdate) return res.status(204).json(); 
        res.json(pesonalUpdate);
    } catch (error) {
        res.json(error);
    }
}

export const deletePersonal = async (req, res) => {
    try {
        const personalDelete = await Personal.findByIdAndDelete(req.params.id);
        if(!personalDelete) return res.status(204).json();
        res.json(personalDelete);
    } catch (error) {
        res.json(error);
    }
}