"use client"
import dynamic from 'next/dynamic'
 
const Search = dynamic(() => import('@components/containers/Search'), {
  ssr: false,
})

export default function Page() {
  return <Search />
}
