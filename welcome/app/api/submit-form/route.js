export async function POST(req) {
  const body = await req.json();

  try {
    const googleResponse = await fetch('https://script.google.com/macros/s/AKfycbzyED3eLXjQ6MC6sixSjsNqq_rWZS86r5Wo1P2dDkkE73x4GIw_SzeDF9KWiH2hsGxEWg/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await googleResponse.json();
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
