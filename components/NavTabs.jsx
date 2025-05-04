import { NavLink } from 'react-router-dom'

import { BiHomeAlt } from 'react-icons/bi'
import { LuDatabase } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { LuBuilding2 } from "react-icons/lu";
import { LuGoal } from "react-icons/lu";
import { IoKeyOutline } from "react-icons/io5";


const tabs = [
  { label: 'Dashboard', icon: BiHomeAlt, to: '/dashboard' },
  { label: 'Accounts', icon: LuDatabase, to: '/accounts' },
  { label: 'Brokers', icon: GoPeople, to: '/' },
  { label: 'Submissions', icon: HiArrowRightEndOnRectangle, to: '/' },
  { label: 'Organizations', icon: LuBuilding2, to: '/' },
  { label: 'Goals & Rules', icon: LuGoal, to: '/' },
  { label: 'Admin', icon: IoKeyOutline, to: '/' }
]

function NavTabs () {
  return (
    <div className='flex items-center gap-2 mt-2 mb-3 px-4 py-2 flex-wrap'>
      {tabs.map((tab, index) => {
        const Icon = tab.icon
        return (
          <NavLink
            key={index}
            to={tab.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full text-sm border ${
                isActive
                  ? 'bg-blue-700 text-gray-200 border-blue-700 hover:bg-blue-800 hover:border-blue-800 hover:scale-105'
                  : 'border-gray-500/50 text-gray-300 bg-gray-950 hover:bg-gray-900 hover:scale-105 hover:-translate-y-0.5'
              }`
            }
            aria-label={tab.label}
          >
            {({ isActive }) => (
            <>
              <Icon className={`w-5 h-5 ${isActive ? "text-gray-200" : "text-blue-400"}`} />
              {tab.label}
            </>
          )}
          </NavLink>
        )
      })}
    </div>
  )
}

export default NavTabs
