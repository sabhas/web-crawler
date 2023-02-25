import { crawlPage } from './crawl'
import { printReport } from './report'
import { getUrl } from '@sasjs/utils/input'

const main = async () => {
  const baseURL = await getUrl('Please provide the URL of the website you want to crawl', 'Invalid url is provided!')

  console.log(`starting crawl of: ${baseURL}...`)

  const pages = await crawlPage(baseURL, baseURL, {})

  printReport(pages)
}

main()
