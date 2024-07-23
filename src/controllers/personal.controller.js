import Personal from '../dao/schema/personal.schema.js';

export const getPersonals = async (req, res) => {
    try {
        const personals = await Personal.find()
        if(!personals) return res.status(204).json();

        res.status(200).json(personals)
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}

export const getPersonal = async (req, res) => {
    try {
        const personalFound = await Personal.findById(req.params.pid);
        if(!personalFound) return res.status(204).json();

        res.status(200).json(personalFound);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}

export const createPersonal = async (req, res) => {

    try {
        const personalFound = await Personal.findOne({dni: req.body.email}) //Comparamos el email ingresado con los de la DDBB
    
        if(personalFound){
            return res.status(301).json({message: "El personal ya existe"}) //Corroboramos si existe es personal
        }
        
        const personal = new Personal(req.body);       //Si no existe, crea un nuevo objeto personal
        const savedPersonal = await personal.save();       //Lo guardamos en la DDBB
        res.status(200).json(savedPersonal);                     //Mostramos lo que se guardo en la DDBB
        
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor: ${error}`})
    }
    
}

export const updatePersonal = async (req, res) => {
    try {
        const pesonalUpdate = await Personal.findByIdAndUpdate(req.params.pid, req.body, {new: true});
        if(!pesonalUpdate) return res.status(204).json(); 

        res.status(200).json(pesonalUpdate);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}

export const deletePersonal = async (req, res) => {
    try {
        const personalDelete = await Personal.findByIdAndDelete(req.params.pid);
        if(!personalDelete) return res.status(204).json();

        res.status(200).json(personalDelete);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}