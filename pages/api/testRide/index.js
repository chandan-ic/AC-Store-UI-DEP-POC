import {brandBike} from  '../../../brand_bike';

export default function handler(req,res) {
    res.status(200).json(brandBike)
}
