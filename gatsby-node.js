exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/tabs/)) {
    page.matchPath = "/tabs/*"
    createPage(page)
  }
}
