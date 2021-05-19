# Getting Started with Next.js Magnifier

## Observation:

The project compile, but I get React Hooks Error.
I already try to use Webpack, Babel and Rollup and got the same error.
I believe is because the React from NextJs and the React from this project comflicted.
To avoid this error I just made available the component without transpile.

## What the project does?

This project is a component to zoom the image,similar with Amazon product zoom.

## How to Install

Copy the "components" folder and paste on your Next.js directory

### Example

```js
import NextImageMagnify from "../components/NextImageMagnify";

export default function Image() {
  return (
    <NextImageMagnify
      src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
      width={500}
      height={500}
      lensWidth={200}
      lensHeight={200}
    />
  );
}
```

| Props      | Type                      |
| ---------- | ------------------------- |
| src        | _string_ **_(required)_** |
| width      | _number_ **_(required)_** |
| height     | _number_ **_(required)_** |
| lensWidth  | _number_ **_(required)_** |
| lensHeight | _number_ **_(required)_** |

### Live Demo

https://nextjs-magnifier-example.vercel.app

![alt text](https://i.imgur.com/29NhuQX.png)
