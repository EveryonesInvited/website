import Airtable from 'airtable';
import testimonial from '../../interfaces/testimonial';
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

  if ( req.method === "POST" ) {

    console.log("RECEIVED REQUEST")
    console.log("REQUEST OBJECT: ", req.body)
    const testimonial: testimonial = req.body;

    const baseKey: string = process.env.AIRTABLE_API_BASE || '';
    const apiKey: string = process.env.AIRTABLE_API_KEY || '';
    console.log('baseKey: ', baseKey);
    console.log('apiKey: ', apiKey); 

    const base = new Airtable({apiKey: apiKey}).base(baseKey);

    return new Promise((resolve, reject) => {
      base('Testimonies').create([
        {
          "fields": {
            // "Submitted On": Date.now(),
            "Message": testimonial.testimony,
            "School": testimonial.location
          }
        },
      ], function(err, records) {
        if (err) {
          console.error(err);
          return reject(err);
        }
        records?.forEach(function (record) {
          console.log(record.getId());
          resolve(res.status(200).json(record.getId()))
        });
      });
    });

  } else {
    res.status(405).end() //Method Not Allowed
  }
}



// const postTestimonial = function (testimonial: testimonial): Promise<any>  {
//   console.log("postTestimonial triggered with: ", testimonial);

//   const baseKey: string = process.env.AIRTABLE_API_BASE || '';
//   const apiKey: string = process.env.AIRTABLE_API_KEY || '';

//   console.log('baseKey: ', baseKey);
//   console.log('apiKey: ', apiKey); 

//   const base = new Airtable({apiKey: apiKey}).base(baseKey);
  
//   return new Promise((resolve, reject) => {
//     base('Testimonies').create([
//       {
//         "fields": {
//           // "Submitted On": Date.now(),
//           "Message": testimonial.testimony,
//           "School": testimonial.location
//         }
//       },
//     ], function(err, records) {
//       if (err) {
//         console.error(err);
//         return reject(err);
//       }
//       records?.forEach(function (record) {
//         console.log(record.getId());
//         resolve(record.getId())
//       });
//     });
//   });
// };

// export { postTestimonial };
