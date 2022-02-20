// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import popServices from "../../data/PopServices"
import Services from "./models/services"

export default function handler(req, res) {
  const { method } = req;
  if(method === 'POST'){
    const { serviceName,sellerId,category,price,sampleImage } = req.body;
    const newService = new Services({
      serviceName,
      sellerId,
      category,
      price,
      sampleImage
    })
  }
  else if(method === 'GET'){
    const services = Services.find({})

    res.status(200).json(services)
  }
}
