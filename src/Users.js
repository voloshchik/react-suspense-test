import React from 'react'

const Users = ({ resource }) => {
  const users = resource.users.read()
  return (
    <div>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
