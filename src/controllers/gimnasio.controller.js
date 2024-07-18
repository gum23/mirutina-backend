import Gimnasio from '../dao/schema/gimnasio.schema.js';

//Trae la lista de todos los gimnasios de la base de datos
export const getGimnasios = async (req, res) => {
    try {
        const gimnasios = await Gimnasio.find()
        return res.json(gimnasios)
    } catch (error) {
        res.json(error)
    }
}

//Trae los datos del gimnasio que solicitamos por medio de id
export const getGimnasio = async (req, res) => {
    try {
        const gimnasioFound = await Gimnasio.findById(req.params.id)
        if(!gimnasioFound) return res.status(204).json();
        return res.json(gimnasioFound)
    } catch (error) {
        res.json(error)
    }
}

//Crea un nuevo documento en la base de datos con los datos proporcionados del gimnasio
export const createGimnasio = async (req, res) => {

    try {
        const gimnasioFound = await Gimnasio.findOne({cuil: req.body.cuil}) //Compara el cuil nueva con las que hay en DBB
        
        if(gimnasioFound) {
            return res.status(301).json({message: 'El gimnasio ya existe'}); //Si ya existe ese gimnasio
        }                                                                    //devuelve el mensaje    
        
        const gimnasio = new Gimnasio(req.body)     //Si no existe crea un nuevo objeto gimnasio
        const savedGym = await gimnasio.save();   //Guarda los datos en la DDBB en la coleccion "gimnasios"
        res.json(savedGym)   //Devuelve lo que acaba de guardar en la DDBB
        
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor: ${error}`})
    }

}

//Actualiza la información que querramos en la base de datos
export const updateGimnasio = async (req, res) => {
    try {
        const gimnasioUpdated = await Gimnasio.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!gimnasioUpdated) return res.status(204).json();
        res.json(gimnasioUpdated)
    } catch (error) {
        res.json(error)
    }
}

//Elimina el gimnasio definitivamente de la base de datos (Ver modo de arreglar, para recuperaciòn de datos)
export const deleteGimnasio = async (req, res) => {
    try {
        const gimnasioFound = await Gimnasio.findByIdAndDelete(req.params.id)
        if(!gimnasioFound) return res.status(204).json();
        return res.json(gimnasioFound)
    } catch (error) {
        res.json(error)
    }

}