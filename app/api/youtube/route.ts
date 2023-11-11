export async function GET() {
  if (!process.env.NEXT_PUBLIC_YOUTUBE_API_KEY) {
    return new Response("No Youtube API key found.", { status: 500 });
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCVzJy5DLXJisFcAfo1y6wQg&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const subscribers = data.items[0].statistics.subscriberCount;
    const viewers = data.items[0].statistics.viewCount;
    return Response.json({ subscribers, viewers,  });
  } catch (error) {
    return new Response(`Something went wrong: ${error}`, { status: 200 });
  }
}
