'use client'

import React from 'react'
import { Transition } from '@headlessui/react'
import { SushiIcon } from '@sushiswap/ui/components/icons'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-slate-900 z-[1080] flex items-center justify-center">
      <Transition
        appear
        show={true}
        unmount={false}
        static
        enter="ease-in-out duration-1000"
        enterFrom="scale-1 saturate-0"
        enterTo="scale-[0.75] saturate-100"
        leave="ease-in-out duration-1000"
        leaveFrom="scale-[0.75]"
        leaveTo="scale-1"
      >
        <SushiIcon width={256} height={256} className="sm:mr-2" />
      </Transition>
    </div>
  )
}
