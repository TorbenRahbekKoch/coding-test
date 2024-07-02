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

First implemented name filter, then the rest - in the frontend.

It could be argued that the code running on onChange should be outside the UsersPage component
since it is not strictly presentation related.

And then I started thinking on that backend thingy. Does it support querying and pagination?
Let me google...
https://www.npmjs.com/package/json-server
It certainly does - back to the drawing board ;)

And a little while later, only drawback is that one seemingly cannot search on a part of the name.
I'll live ;)

It is good question whether the filter should be cleared when hiding filter. I have chosen not to.
