import React from 'react'
// import navigation
import {navigationData} from '../Data'

const Nav = () => {
  return (
    <nav>
        <ul className='flex gap-x-8'>
        {navigationData.map((item, index) => {
        return (
          <li key={index}>
            <a className='text-black' href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
        </ul>
    </nav>
  )
}

export default Nav

