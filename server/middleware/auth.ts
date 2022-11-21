import { createError } from 'h3'

export default defineEventHandler(async event => {
  if (event.node.req.url?.includes('/api/')) {
    const token = getCookie(event, 'token') as string
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'You must be signed in to access to resource.'
      })
    }
  }
})
