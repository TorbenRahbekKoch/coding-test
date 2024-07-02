# Start
Unzip
Open Visual Studio Code in the folder
Read README
  Nice to see you are using Vite :)
Running the application
Opening App.tsx
  Googling Mantine to see what is
Navigating the code, seeing what's here, matching it up with the application in the browser

# First assignment - Filters on List Users

Adding packages immer and use-immer - so very nice
for handling changes to objects.
https://immerjs.github.io/immer/example-setstate 

First implemented name filter, then the rest - in the frontend. Doh!

It could be argued that the code running on onChange should be outside the UsersPage component
since it is not strictly presentation related.

And then I started thinking on that backend thingy. Does it support querying and pagination?
Let me google...
https://www.npmjs.com/package/json-server and https://github.com/typicode/json-server/tree/v0 - for
some reason I did not spot that in the readme 
It certainly does - back to the drawing board ;)

And a little while later, only drawback is that one seemingly cannot search on a part of the name.
I'll live ;)

It is good question whether the filter should be cleared when hiding filter. I have chosen not to.

Choosing between Grid or List is done via a single button, similar to filtering.

I haven't added sorting. It seems to be trivial in json-server, but I did not want to spend the
time on the UI for it.

Adding (proper) pagination was a hazzle since the json-server returns the page count
in a links header, so that had to be parsed out.

The User Details page is not pretty, but it shows the needed information. I couldn't find
any decent "show just some text in a nice" components in Mantine. For some reason this
is never the case in UI-component frameworks.

When saving a user the backend gives me a 404. Did not want to spend time on that.

I tried getting having 'src' as root path to work, but did not succeed. I have had issues with that
in my own projects, as well. 

I wanted to restructure the application somewhat, but I don't think it would be worth the time spent.
