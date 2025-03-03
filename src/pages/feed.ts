export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      'Location': 'https://blog.sitocha.cc/feed'
    }
  });
}
