import {discoverBike} from  '../../../discoverBike';

export default function handler(req,res) {
    res.status(200).json(discoverBike)
}
