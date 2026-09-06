export async function GET() {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;

  return Response.redirect(authUrl, 302);
}
