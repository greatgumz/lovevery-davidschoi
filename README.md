> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) to complete the Lovevery Senior Software Engineer take home assignment.

## David Choi's Solution

- I used the image above as the design template and also drew inspiration from [lovevery.com](https://lovevery.com).
- I'm used to Next's "Page Router", but since Next 13 encourages the "App Router" I gave it a try and took a little extra time to get used to the structure and read through the documentation.
- Primary Pages:
  - `Home` - Landing page with form to collect child's name and birthday with error handling. Used Context to share User data across app. I also used localStorage to store data in the browser.
  - `Products` - Products page which displays 6 products available for 1 year old. If baby's birthday falls within the product's month range, a "recommended" UI will be provided around the play kit. Each "play kit" card takes you to its respective product page:
    - The Looker: 0-12 weeks
    - The Charmer 3-4 months
    - The Sensor: 5-6 months
    - The Inspector: 7-8 months
    - The Explorer: 9-10 months
    - The Thinker: 11-12 months
  - `PlayKit` - Product page with `ImageCarousel`, `Stars`, `Breadcrumb` and populated with dynamic dummy data.
  - `RootLayout` - Layout component with `Header` and `Footer` borrowed from lovevery.com to persist across app pages.

### Styling
- CSS in JS: I used `styled-components` to write CSS for my React components, but this was tedious because the Next.js 13 "App Router" documentation doesn't provide full support so I'm using a combination of CSS variables, CSS modules, and `styled-components` in the interest of time. Typically I would have used the suggested `ThemeProvider` and `createGlobalStyle` to write my CSS.
- Responsiveness: I used a desktop-first approach and let each component/page drive the breakpoints for responsiveness.

### Testing
- I would use React Testing Library for unit testing and Cypress for end-to-end testing.
- I would test the following primary features:
  - `Home` - Form validation, localStorage
  - `Products` - Product cards and `ImageCarousel`, `utils/getRecommendedPlayKitByBirthday`
  - `PlayKit` - `Stars`, `Breadcrumb`, `Button`

### Server
- I think Contentful would be a great CMS for this project. Our Next.js pages are structured in a way that could be composed to Content Models and we can use the Contentful API to fetch data and render it on the page. Right now we're using static data from our `utils` folder, but a CMS like Contentful will allow us to fetch data on the server using Server components and improve performance and SEO. Using the App Router we would be able to use `async/await` in Server Components to fetch data from Contentful or any endpoint and in our Client Components we could fetch data using [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/v4). 

## Local Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
