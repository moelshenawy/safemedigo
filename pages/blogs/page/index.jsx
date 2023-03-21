import React from 'react'
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  router.push(`/blogs`)

  return (<></>
  )
}

export default Page