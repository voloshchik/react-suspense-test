import { Suspense } from 'react'
import Post from './Post'
import { useResource } from './resource'
import Users from './Users'

// eslint-disable-next-line react-hooks/rules-of-hooks
const resource = useResource()
console.log(resource)

function App() {
  return (
    <div className='container'>
      <h1>Suspense For Data Fetching</h1>
      <Suspense fallback={<p>Loading posts...</p>}>
        <Post resource={resource} />
      </Suspense>

      <Suspense fallback={<p>Loading users...</p>}>
        <Users resource={resource} />
      </Suspense>
    </div>
  )
}

export default App
