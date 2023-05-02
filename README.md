# React viewport detect
A React hook to detect if an HTML Element has been display in the viewport. 
This is easy to use. You just have to provide an react ref. 
By default it freeze the value when the element has been display. 
That is nice to triggered one time animation !

[![NPM Version](https://badgen.net/npm/v/react-viewport-detect)](https://www.npmjs.com/package/react-mui-snackbar)
![Minified size](https://img.shields.io/bundlephobia/min/react-viewport-detect)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

## Demo 

[example page](https://alexandrebdry.vercel.app/react-viewport-detect)

## Usage

### Basic Usage
```jsx
import {useViewportDetection} from "react-viewport-detect";
import {useRef, useEffect} from "react" ;

const App () => {
    
    const ref = useRef() ; 
    const isVisible = useViewportDetection(ref) ;

    useEffect(() => {
        console.log(isVisible) ;
    },[isVisible]) ;
    
    return (
        <div>
            <h1>React visible hook</h1>
            <div ref={ref} >
                <p>
                    Do I am visible ? 
                </p>
            </div>
        </div>
    );
    
};
```

### Advanced 
```jsx
import {useViewportDetection} from "react-viewport-detect";
import {useRef, useEffect} from "react" ;

const App () => {
    
    const ref = useRef() ; 
    const isVisible = useViewportDetection(ref, {freeze: false, threshold: 1}) ;

    useEffect(() => {
        console.log(isVisible) ;
    },[isVisible]) ;
    
    return (
        <div>
            <h1>React visible hook</h1>
            <div ref={ref} >
                <p>
                    Do I am visible ? 
                </p>
            </div>
        </div>
    );
    
};
```

## Function parameters
### useViewportDetection

| Parameter                               | Type  | Description                                                                                       | Default                                                          |
|-----------------------------------------|-------|---------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| `ref`                                   | React ref | The React ref to detect                                                                           | none                                                             | 
| `{rootMargin, root, threshold, freeze}` | Array | Intersection Observer options + freeze. Freeze is to keep the value when it has been display once | `{rootMargin = 0px,  root = null, threshold = 0, freeze = true}` |

[More about Intersection Observer options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)  


## Next steps

- TypeScript Support
- Improve the DX 
- Unit Testing

## Contributing

Contributions are always welcome!
You can create a new pull request with changes or create a new issue and I will update this project

