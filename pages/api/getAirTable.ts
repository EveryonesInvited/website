import Airtable from 'airtable';
import testimonial from '../../interfaces/testimonial';
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {

  if ( req.method === "GET" ) {

    console.log("RECEIVED REQUEST")
    console.log("REQUEST OBJECT: ", req.body)
    const testimonial: testimonial = req.body;

    const baseKey: string = process.env.AIRTABLE_API_BASE || '';
    const apiKey: string = process.env.AIRTABLE_API_KEY || '';
    console.log('baseKey: ', baseKey);
    console.log('apiKey: ', apiKey); 

    const base = new Airtable({apiKey: apiKey}).base(baseKey);

    // return new Promise((resolve, reject) => {

      base('Testimonies').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 10,
        view: "Grid view",
        fields: ["Submitted On", "Message", "School"],
        filterByFormula:`AND(Approved)`,
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
  
      records.forEach(function(record) {
          console.log('Retrieved', record.get('Message'));
      });
  
      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
  
  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  return res.status(200).end();
}
}