//import Instructors from '../dao/schema/instructors.schema.js';
import Users from '../dao/schema/users.schema.js';

export const getInstructors = async (req, res) => {
    const dataInstructors = req.session.instructor;
    //const idInstructor = req.params.id;
    //console.log(idInstructor);
    
    try {
        const usuarios = await Users.find({instructor: dataInstructors.id}).populate("instructor");
        if(!usuarios) return res.status(404).json();

        res.status(200).json(usuarios);
    } catch (error) {
        
    }
}