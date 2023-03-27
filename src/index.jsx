import react from "react";

/**
 * This is a React hook easy to use. This hook allow you to know if an element is present in the current viewport.
 * It returns you a boolean. The boolean will be set at true when the element appear on the viewport but only once.
 *
 * @param ref - a React ref to test if the ref is present in VP
 * @returns {boolean}
 */
const useVisible = (ref) => {

    const [isVisible, setIsVisible] = react.useState(false) ;
    const observer = react.useMemo(
        () =>
            new IntersectionObserver(([entry]) => {
                setIsVisible(entry.isIntersecting)
                    if(entry.isIntersecting)
                        observer.disconnect() ;
                }
            ),
        [],
    );

    react.useEffect(() => {
        if( ! isVisible)
            observer.observe(ref.current);
    }, [ref, observer]);

    return isVisible ;

}

export default useVisible ;


