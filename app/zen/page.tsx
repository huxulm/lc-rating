"use client"
import dynamic from 'next/dynamic'
 
const Zen = dynamic(() => import('../../components/containers/Zen'), {
  ssr: false,
})

import "../../scss/styles.scss"

export default function Page() {
  return <Zen />
}
