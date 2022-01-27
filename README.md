![](./public/thumbnail.png)

# WebDev TLDR;

[Educational website](https://webdev-tldr.vercel.app/) + [interactive slides](https://webdev-tldr-slides.vercel.app/) with short, explanatory & interactive programming guides. 

Made with [React.js](https://reactjs.org/) (UI framework), [Next.js](https://nextjs.org/) (React.js framework for Server Side Rendering) and [sli.dev](https://sli.dev) (Presentation Slides for Developers).

## Setup

To run this all locally, you need to have Node.js installed on your machine.

1. Install [Node.js](https://nodejs.org/en/)
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional)
3. Clone this repo `git clone https://github.com/bartolomej/webdev-tldr && cd webdev-tldr`
4. Install dependencies `yarn install && cd slides && yarn install`
5. Run the website app in development `yarn run dev`
6. Run slides app in development `cd slides && yarn run dev`

## Contribute

To contribute, create a new branch prefixed with the issue id (if the issue exists), and a short explanatory description (e.g. `2_code_prettify`).

Commit all the changes in this branch and [create a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

All the changed committed to the `main` branch will be automatically deployed to [Vercel](https://vercel.com/).
