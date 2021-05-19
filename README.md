# Getting Started with Create React App

## OBS:

The project compile, but I get React Hooks Error.
I believe is because the React from NextJs and the React from this project comflicted

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
