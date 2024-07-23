import Clients from '../dao/schema/clients.schema.js';

export const getClients = async (req, res) => {
    try {
        const clients = await Clients.find();
        if (clients) return res.status(204).json();

        res.status(200).json(clients);
    } catch (error) {
        
    }
}

export const getClient = async (req, res) => {
    try {
        const clientFound = await Clients.findById(req.params.cid);
        if(!clientFound) return res.status(204).json();

        res.status(200).send(clientFound);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}

export const createClient = async (req, res) => {
    try {
        const clientFound = await Clients.findOne({dni: req.body.email});
        if(clientFound) return res.status(301).json({message: "Este cliente ya existe"});

        const client = new Clients(req.body);
        const savedClient = await client.save();
        res.status(200).json(savedClient);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor: ${error}`})
    }
}

export const deleteClient = async (req, res) => {
    try {
        const clientFound = await Clients.findByIdAndDelete(req.params.cid);
        if(!clientFound) return res.status(204).json();

        res.status(200).send(clientFound);
    } catch (error) {
        res.status(500).json({message: `Error interno de servidor ${error}`});
    }
}

export const updateClient = async (req, res) => {
    try {
        const clientFound = await Clients.findByIdAndUpdate(req.params.cid, req.body, {new: true});
        if(!clientFound) return res.status(204).json();

        res.status(200).send(clientFound);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor ${error}`});
    }
}