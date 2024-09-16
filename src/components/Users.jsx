import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <div>
        <Link to='user1'>User 1</Link>
        <br/>
        <Link to='user2'>User 2</Link>
        <br/>
        <Link to='user3'>User 3</Link>
        <br/>
        <Link to='admin'>Admin</Link>
        <Outlet/>
    </div>
  )
}

export default Users