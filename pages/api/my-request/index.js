import { myData } from "../../../new";

export default function handler(req, res) {
  res.status(200).json(myData);
}
