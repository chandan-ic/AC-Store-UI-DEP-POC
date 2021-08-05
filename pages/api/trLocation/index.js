import {dealers} from  '../../../pincode_dealer';

export default function handler(req,res) {
    const { pinCode } = req.query;
    res.status(200).json(dealers)
}

