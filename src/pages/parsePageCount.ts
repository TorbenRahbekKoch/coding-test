// The json-server returns the page count in a header, we pick that out here
export function parsePageCount(headers: Headers): number {
  const links = headers.get('link');
  if (links != null) {
    const items = links.split(',');
    const last: string[] = items.filter(item => item.indexOf('rel="last"') >= 0);
    if (last.length > 0) {
      const pageCountRegex = /page=(?<pagecount>\d+)/i;
      const pageCountGroup = last[0].match(pageCountRegex)?.groups;
      if (pageCountGroup != null) {
        return parseInt(pageCountGroup['pagecount']);
      }
    }
  }
  return 1;
}
