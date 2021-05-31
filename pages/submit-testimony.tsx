import Head from 'next/head';
import Form from '../components/form';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Form Submission</title>
        <meta name="" content="Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form />
      </main>
    </div>
  );
}
