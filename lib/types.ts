// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Academic Program
export interface DrupalProgram extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  programType?: DrupalTerm[]
  department?: DrupalTerm[]
  credential?: string
  duration?: string
  credits?: string
  tuitionEstimate?: string
  startDates?: string
  careerOutcomes?: string[]
  image?: DrupalImage
}

export interface ProgramsData {
  nodePrograms: {
    nodes: DrupalProgram[]
  }
}

// Faculty Member
export interface DrupalFaculty extends DrupalNode {
  body?: {
    processed: string
  }
  positionTitle?: string
  department?: DrupalTerm[]
  email?: string
  phone?: string
  officeLocation?: string
  officeHours?: string
  education?: string[]
  photo?: DrupalImage
}

export interface FacultyData {
  nodeFaculties: {
    nodes: DrupalFaculty[]
  }
}

// College Event
export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventCategory?: DrupalTerm[]
  registrationUrl?: string
  cost?: string
  image?: DrupalImage
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// News
export interface DrupalNews extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  newsCategory?: DrupalTerm[]
  publishDate?: {
    timestamp: number
  }
  author?: string
  summary?: {
    processed: string
  }
  image?: DrupalImage
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
