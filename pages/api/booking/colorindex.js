import {variantColorData} from '../../../variantColor'

export default function handler(req,res) {
    res.status(200).json(variantColorData)
}