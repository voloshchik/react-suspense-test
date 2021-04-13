export function useResource() {
  return {
    posts: wrappPromise(fetchPosts()),
    users: wrappPromise(fetchUsers()),
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

function wrappPromise(promise) {
  let status = 'pending'
  let result

  const suspender = promise.then(
    (r) => {
      result = r
      status = 'success'
    },
    (e) => {
      result = e
      status = 'error'
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

function fetchPosts() {
  return delay(1500).then(() => {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then((res) => res.json())
  })
}

async function fetchUsers() {
  await delay(3000)
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limits=5')
  return await res.json()
}
