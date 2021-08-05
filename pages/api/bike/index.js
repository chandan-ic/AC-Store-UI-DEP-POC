import { vehicles } from "../../../bike";
export default function handler(req, res) {
  res.status(200).json(vehicles);
}
