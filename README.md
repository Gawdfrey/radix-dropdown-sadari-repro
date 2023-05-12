# Radix dropdown menu issue

I've had some issues lately where on mobile safari (or webkit) that the first click on the trigger button does not register.
This only happens on first load, and refreshing the page makes it work again. Clicking somewhere else on the page before clicking the button also works.

## Steps to reproduce

1. Run npm install and npm run dev
2. Go to localhost:3000 in a safari browser
3. Minimize the viewport to mobile width
4. Attempt to open the menu

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
