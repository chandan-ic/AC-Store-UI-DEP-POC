import {vehicles} from  '../../../vehicle';
export default function handler(req,res) {
    res.status(200).json(vehicles)
}