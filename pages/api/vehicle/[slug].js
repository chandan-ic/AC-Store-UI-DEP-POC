import {vehicles} from  '../../../vehicle';
export default function handler({query:{slug}},res) {
    const filtered = vehicles.filter(vehicle => vehicle.slug === slug)
    if(filtered.length >0 ) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message: `Vehicle with name ${slug} is not found`})
    }
}