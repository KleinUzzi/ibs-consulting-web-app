import ServicesSecondSection from '@/components/services/ServicesSecondSection'
import ServicesTopSection from '@/components/services/ServicesTopSection'
import Head from 'next/head'


export default function Services() {
  return (
    <>
      <Head>
        <title>IBS Consulting | Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesTopSection />
      <ServicesSecondSection />

    </>
  )
}