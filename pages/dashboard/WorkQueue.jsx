import React, { useState } from 'react'
import items from '../../assets/data/workQueueData.json'
import SortButton from '../../components/SortButton'

import WorkQueueHeader from '../../components/WorkQueueHeader'
import WorkQueueRow from '../../components/WorkQueueRow'

export default function WorkQueue () {
  const [sortItems, setSortItems] = useState(items)
  const [isActive, setIsActive] = useState('assigned')

  const pendingReview = items.filter(item => item.status == 'Pending')
  const referrals = items.filter(item => item.type == 'Underwriter Referral')

  function myAssigned () {
    setSortItems(items)
    setIsActive('assigned')
  }

  function setPending () {
    setSortItems(pendingReview)
    setIsActive('pending')
  }
  function setReferrals () {
    setSortItems(referrals)
    setIsActive('referrals')
  }

  return (
    <div className='bg-gray-800/50 p-4 rounded-2xl w-[70%]'>
      <h2 className='text-2xl mb-2'>Work Queue</h2>
      <div className='flex gap-4 mb-3'>
        <SortButton
          onClick={myAssigned}
          itemsLength={items.length}
          text={'Assigned to me'}
          isActive={isActive === 'assigned'}
        />
        <SortButton
          onClick={setPending}
          itemsLength={pendingReview.length}
          text={'Pending Review'}
          isActive={isActive === 'pending'}
        />
        <SortButton
          onClick={setReferrals}
          itemsLength={referrals.length}
          text={'Referrals'}
          isActive={isActive === 'referrals'}
        />
      </div>
      <WorkQueueHeader />

      <div className='h-[21rem] overflow-y-auto hide-scrollbar'>
        <WorkQueueRow
        sortItems={sortItems}
         />
      </div>
    </div>
  )
}
