export const generateStaticParams = async () => {
  return [
    { slug: 'redsandalwood' },
    { slug: 'teak' },
    { slug: 'lightmaple' },
    { slug: 'bluegrey' },
    { slug: 'lightmaple2' },
    { slug: 'bluegrey2' }
  ]
}

export default function Layout({ children }) {
  return children
} 