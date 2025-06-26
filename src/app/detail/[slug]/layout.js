export const generateStaticParams = async () => {
  return [
    { slug: 'redsandalwood' },
    { slug: 'cowghe250' },
    { slug: 'cowghee500' },
    { slug: 'cowghee1000' },
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