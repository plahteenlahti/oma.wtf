module.exports = {
  siteMetadata: {
    title: `oma.wtf`,
    description: `OmaOma. Oma-alkuisista sovelluksia, jotakin jokaiselle.`,
    author: `@plahteenlahti`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-app-store`,
      options: {
        apps: [
          "com.terveystalo.com.terveystalo.ajanvaraus",
          "com.elisa.moesl",
          "fi.itella.posti",
          "com.fortum.FortumValpasMobile",
          "fi.omasp.omavahvistus.prod",
          "fi.riistakeskus.Riista",
          "fi.omasp.mobile.bank",
          "fi.mehilainen.mobileapp.prod",
          "com.laakkonen.omalaakkonen",
          "fi.helen.omahelenMobile",
          "fi.dna.omadna",
          "fi.ikaalistenmatkatoimisto.mobile",
          "com.yonoton.onniravintolat",
          "com.movendos.mclinic.ttaalto",
          "com.movendos.mclinic.ttlaine",
          "com.fns.univet",
          "no.enoro.KundeAppNGEFinland",
          "com.seure.omaseure",
          "fi.Tietotalo.GTK.Kivi.Mobile.iOS",
          "fi.omasp.yhteys",
          "com.movendos.mclinic.ttfinla",
        ], // required
        country: "fi", // optional, can affect the language of reviews
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`, `noto sans jp`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components",
  ],
}
