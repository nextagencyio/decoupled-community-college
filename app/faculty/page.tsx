import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_FACULTY } from '@/lib/queries'
import { FacultyData } from '@/lib/types'
import Header from '../components/Header'
import FacultyCard from '../components/FacultyCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Faculties | Community College',
  description: 'Browse our faculties.',
}

async function getFaculties() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_FACULTY, { first: 50 })
    return data?.nodeFaculties?.nodes || []
  } catch (error) {
    console.error('Error fetching faculties:', error)
    return []
  }
}

export default async function FacultiesPage() {
  const items = await getFaculties()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 font-display">
              Faculties
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Explore our faculties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Faculties Yet</h2>
              <p className="text-gray-500">
                Faculties will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <FacultyCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
