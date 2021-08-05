import {masterData} from '../../../search_master'

export default function handler (req,res) {
res.status(200).json(masterData);
}

