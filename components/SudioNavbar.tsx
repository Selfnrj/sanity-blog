import Link from "next/link"
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

function SudioNavbar(props: any) {
  return (
    <div>
      <Link href="/" className="text-[#f39c12] p-4 flex items-center">
        <ArrowUturnLeftIcon className="h-6 w-6 mr-2" />
        Go to Website
      </Link>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default SudioNavbar