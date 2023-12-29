/**
 * This file contains the configuration for the API endpoints and tokens we use.
 *
 * - If you are a OneDrive International user, you would not have to change anything here.
 * - If you are not the admin of your OneDrive for Business account, you may need to define your own clientId/clientSecret,
 *   check documentation for more details.
 * - If you are using a E5 Subscription OneDrive for Business account, the direct links of your files are not the same here.
 *   In which case you would need to change directLinkRegex.
 */
module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  clientId: '12784d16-2b14-41ef-878d-55b48f416a52',
  obfuscatedClientSecret: 'http://localhost/?code=0.AUoA7AxC9UAIQ06s1jy6kKsd4xZNeBIUK-9Bh41VtI9BalKJABE.AgABAAIAAAAmoFfGtYxvRrNriQdPKIZ-AgDs_wUA9P_1ApJy-Lw3kLzWWsY0Z_g1PYioWvaj7Xcq5X701CbvEFMEuMhMDkutI8_9E9u3tM4TXcppjhedBeHpMxrSuhN74lU63X88yjl2Tj_a0duoXMPaxHavvJUCwD6MGuOppxdwMiTarVqeSa4SXqgqAxn8urdJnb5i1uKHhPONrjjQEzOXgBI16I57i-Thmp1A5hvpxJO_S3QbcJlc30ouTlnX2K2O3XmP3_xnpAJ9L2PqViV5_HaIBRunGHI4yklFko-xcNITUciw-pIbTF3tN0JtHGO6L8hRaNShmWqIYrE3RphWKrEJfYn1wJa8gd6E3MDk6SsZIqmy7ZxbYOekwsHJmMO6zEa5az3KjpypV0sGPsXlHDl9KyOCEOal9aXsAwh3c8n_tJNMRt6VrDBfMSPCWgtBaOxStS6j8ykg5X_LALVsrlZGMU9ZFb-8RN-t1os8ZkwrsQZtp-g1sIgeBccD6V5ebtJ1ejDgT3SDaGzxghKxVUZeOs8FKUc0aM-F5P3s2vl5dOPn53YUJa1jyR2zjBEV7XSGLNs9dhPywJreyKnv5ILw_CEvXSpTlziM_JfDXDSKmRS_Y_DxZSpuyD8pj9keus-4tCT-eSmmRVeSrKHZMOwGDrFVEJwUOx-wBCTvVdlTqBUy-65kboqwIbPE6sG_9fM_NbXc6KM0FNOOu_n-58sr&session_state=f65cceb4-cc1b-4d0b-a667-8126ab97b954#',
  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  scope: 'user.read files.read.all offline_access',

  // Cache-Control header, check Vercel documentation for more details. The default settings imply:
  // - max-age=0: no cache for your browser
  // - s-maxage=0: cache is fresh for 60 seconds on the edge, after which it becomes stale
  // - stale-while-revalidate: allow serving stale content while revalidating on the edge
  // https://vercel.com/docs/concepts/edge-network/caching
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
