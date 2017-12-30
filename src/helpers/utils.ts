const URL = require('url-parse')

function extractYoutubeVideoId (): string {
  const parsedUrl = new URL(location.toString(), location, true)
  return parsedUrl.query.v
}

export {
  extractYoutubeVideoId,
}