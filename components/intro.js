import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-7xl md:text-6xl font-bold tracking-tighter text-purple-600 leading-tight md:pr-6">
        The Axiom Blog
      </h1>
      <h4 className="text-center md:text-left text-purple-600 text-lg mt-5 md:pl-8">
      Explore Axiom and the future of Cloud Native Datastore. Subscribe to our newsletter to make sure you don't miss anything.{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
        </a>{' '}
      </h4>
    </section>
  )
}
