// The json-server returns the page count in a header, we pick that out here - the header looks like:
// 	<http://localhost:3000/users?_page=1&_per_page=3>; rel="first", <http://localhost:3000/users?_page=2&_per_page=3>; rel="next", <http://localhost:3000/users?_page=2&_per_page=3>; rel="last"
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
  // We default to one page, or the navigation bar dissapears
  return 1;
}
