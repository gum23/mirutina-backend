import Rutinas from '../dao/schema/rutinas.schema.js';

export const getRutinas = async (req, res) => {
    try {
        const rutinaFound = await Rutinas.find();
        if(!rutinaFound) return res.status(204).json();
        
        res.status(200).json(rutinaFound);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}

export const getRutina = async (req, res) => {
    try {
        const rutinaFound = await Rutinas.findById(req.params.rid);
        if(!rutinaFound) return res.json({message: "La rutina no existe"});

        res.status(200).json(rutinaFound);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}

export const createRutina = async (req, res) => {
    
    try {
        const body = req.body;
        console.log(body);
    
        // const clientFound = await Clients.findOne({_id: req.params.cid});
        // if(!clientFound) return res.send("El cliente y/o alumno no existe");
        
        // const clientData = {
        //     client: {
        //         id: clientFound._id,
        //         name: clientFound.name,
        //         lastName: clientFound.lastName
        //     }
        // };

        // const rutinaOfClient = await Rutinas.findOne(clientData);
        // if (rutinaOfClient) return res.send("Ya existe rutina para este cliente");

        // const rutinaBody = {...clientData,... body};
        
        // const rutina = new Rutinas(rutinaBody);
        // const saveRutina = await rutina.save();

        // res.status(200).json(saveRutina);    
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }

}

export const updateRutina = async (req, res) => {
    try {
        const rutinaUpdate = await Rutinas.findByIdAndUpdate(req.params.rid, req.body, {new: true});
        if(!rutinaUpdate) return res.status(204).json({message: "La rutina no existe"});

        res.status(200).json(rutinaUpdate);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }

}

export const deleteRutina = async (req, res) => {
    try {
        const rutinaDelete = await Rutinas.findByIdAndDelete(req.params.rid);
        if(!rutinaDelete) return res.status(204).json({message: "La rutina que quiere eliminar no existe"});

        res.status(200).json(rutinaDelete);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}