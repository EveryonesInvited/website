import Airtable from 'airtable';
import testimonial from '../../types/testimonial';
import { NextApiRequest, NextApiResponse } from 'next';

const baseKey: string = process.env.AIRTABLE_API_BASE || '';
const apiKey: string = process.env.AIRTABLE_API_KEY || '';

const base = new Airtable({ apiKey: apiKey }).base(baseKey);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.send(405); // Method Not Allowed
  }

  const testimonial: testimonial = req.body;

  try {
    const data = await base('Testimonies').create({
      Message: testimonial.message,
      School: testimonial.location,
    });

    res.status(200).send(data);
  } catch (e) {
    res.send(403);
  }
};
