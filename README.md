React-Typescript project done using hooks and https://jsonplaceholder.typicode.com/posts api.

React-router-dom@6 is used to make different pages with connected components.

Main points of the project:
1) On page load data is being fetched, during this period a spinning element is displayed.
2) Once data is fetched, it's displayed in a list.
3) Pagination is applied to data. 7 items are displayed per page.
4) To change the list, user can use mouse clicks on numbers, prev & next buttons or keyboard left & right arrows.
5) If user presses on the item in the list, he is brought to different page, where more information is displayed.
6) User can go back to the main page.
7) If user presses button to make a new post, he is brought to a page, where he can make a new post (new post would be added to DB if it was connected to it).
8) Once he creates a new post, he's redirected back to the main page.
9) User can redirect to the pages using urls: 1) "/" - main page. 2) "/post/:postNumber". 3) "/newpost".