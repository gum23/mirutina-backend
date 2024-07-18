import Clients from '../dao/schema/clients.schema.js';

export const getClients = async (req, res) => {
    const clients = await Clients.find();
    return res.json(clients);
}

export const getClient = async (req, res) => {
    
}

export const createClient = async (req, res) => {
    try {
        const clientFound = await Clients.findOne({dni: req.body.dni});
        if(clientFound) return res.status(301).json({message: "Este cliente ya existe"});

        const client = new Clients(req.body);
        const savedClient = await client.save();
        res.json(savedClient);
    } catch (error) {
        res.status(500).json({message: `Error interno del servidor: ${error}`})
    }
}

export const deleteClient = async (req, res) => {

}

export const updateClient = async (req, res) => {

}