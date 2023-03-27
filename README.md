# @react/visible
This is a React hook easy to use. This hook allow you to know if an element is present in the current viewport.
It returns you a boolean. The boolean will be set at true when the element appear on the viewport but only once.

## Installation 
```bash
npm i @react/visible
```

## Usage
To use this package you need a React ref. 
By default the value is 'False'. Once the ref is present in the VP the boolean will be set at true.

````jsx
import useVisible from "@react/visible";
import {ref} from "react" ;

const App () => {
    
    const ref = ref() ; 
    const isVisible = useVisible(ref) ;
    
    
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
````

## Licence
[GPL 3](https://www.gnu.org/licenses/gpl-3.0.fr.html)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Authors 
- [Alexandre BAUDRY](https://github.com/Alexandrebdry)
