import React from 'react' ;
export const useViewportDetection = (ref,  {
    rootMargin : rootMargin =  '0px',
    root : root =  null,
    threshold: threshold =  0,
    freeze: freeze = true
}) => {

    const [isDetected,setIsDetected] = React.useState(false) ;

    React.useEffect(() => {

        if ( !  Object.prototype.hasOwnProperty.call(window,'IntersectionObserver'))
            return new Error('Intersection Observer is not supported by this browser');

        const observerParam = { threshold : threshold, root:  root,  marginRoot: rootMargin} ;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsDetected(entry.isIntersecting) ;

                // Freeze the detection.
                if (freeze)
                    if(entry.isIntersecting) observer.disconnect() ;

            }, observerParam) ;

        // False by default it will be triggered
        // at least once
        if ( isDetected === false )
            observer.observe(ref.current) ;

        return () => observer.disconnect();

    },[ref]) ;

    return isDetected ;

}



