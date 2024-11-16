export function parseYouTubeUrl(url) {
  const urlParams = new URLSearchParams(new URL(url).search);
  const videoId = urlParams.get("v");
  const playlistId = urlParams.get("list");
  const index = urlParams.get("index");

  // If it's a playlist URL with an index, return the specific video URL
  if (playlistId && index) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }

  // Otherwise, return the original URL (either single video or full playlist)
  return url;
}
