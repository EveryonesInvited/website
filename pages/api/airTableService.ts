import Airtable from 'airtable';
import testimonial from '../../types/Testimonial';
import { NextApiRequest, NextApiResponse } from 'next';
import moment from 'moment';

const baseKey: string = process.env.AIRTABLE_ID || '';
const apiKey: string = process.env.AIRTABLE_KEY || '';

const base = new Airtable({ apiKey: apiKey }).base(baseKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.send(405);
  }

  const testimonial: testimonial = req.body;

  try {
    const data = await base('Testimonies').create({
      'Submitted On': moment().toISOString(),
      Message: testimonial.testimony,
      School: testimonial.location,
    });

    res.status(200).send(data);
  } catch (e) {
    console.error(e);

    res.send(403);
  }
};
