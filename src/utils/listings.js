import { seedJobs, seedApprenticeships } from '../data/seed'

const matchesSearch = (item, search) => {
  if (!search) return true
  const q = search.toLowerCase()
  const fields = [
    item.title,
    item.company,
    item.artisanName,
    item.city,
    item.category,
    item.description,
  ]
  return fields.some((f) => f && f.toLowerCase().includes(q))
}

const sortListings = (items, sortBy) => {
  const sorted = [...items]
  switch (sortBy) {
    case 'featured':
      return sorted.sort(
        (a, b) =>
          Number(b.isFeatured) - Number(a.isFeatured) ||
          new Date(b.postedAt) - new Date(a.postedAt)
      )
    case 'pay-high':
      return sorted.sort((a, b) => (b.salary || b.stipend || 0) - (a.salary || a.stipend || 0))
    case 'newest':
    default:
      return sorted.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
  }
}

export const getJobs = (filters = {}) => {
  let jobs = [...seedJobs]

  if (filters.city) jobs = jobs.filter((j) => j.city === filters.city)
  if (filters.category) jobs = jobs.filter((j) => j.category === filters.category)
  if (filters.jobType) jobs = jobs.filter((j) => j.jobType === filters.jobType)
  if (filters.minSalary) jobs = jobs.filter((j) => j.salary >= Number(filters.minSalary))
  if (filters.search) jobs = jobs.filter((j) => matchesSearch(j, filters.search))
  if (filters.featuredOnly) jobs = jobs.filter((j) => j.isFeatured)

  return sortListings(jobs, filters.sortBy || 'newest')
}

export const getApprenticeships = (filters = {}) => {
  let items = [...seedApprenticeships]

  if (filters.city) items = items.filter((a) => a.city === filters.city)
  if (filters.category) items = items.filter((a) => a.category === filters.category)
  if (filters.hasStipend === 'yes') items = items.filter((a) => a.hasStipend)
  if (filters.hasStipend === 'no') items = items.filter((a) => !a.hasStipend)
  if (filters.search) items = items.filter((a) => matchesSearch(a, filters.search))
  if (filters.featuredOnly) items = items.filter((a) => a.isFeatured)

  return sortListings(items, filters.sortBy || 'newest')
}

export const getFeatured = () => {
  const jobs = seedJobs.filter((j) => j.isFeatured)
  const apprenticeships = seedApprenticeships.filter((a) => a.isFeatured)
  return [...jobs, ...apprenticeships].sort(
    (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
  )
}

export const getListingById = (id) => {
  return (
    seedJobs.find((j) => j.id === id) ||
    seedApprenticeships.find((a) => a.id === id) ||
    null
  )
}

export const formatPay = (item) => {
  if (item.type === 'job') {
    const period =
      item.salaryPeriod === 'day' ? '/day' : item.salaryPeriod === 'hour' ? '/hr' : '/mo'
    return `GHS ${item.salary?.toLocaleString()}${period}`
  }
  if (item.hasStipend && item.stipend) {
    return `GHS ${item.stipend.toLocaleString()}/mo stipend`
  }
  return 'Unpaid — meals/training provided'
}

export const getInitials = (name = '') =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
