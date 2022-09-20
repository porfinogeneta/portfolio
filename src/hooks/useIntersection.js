import {useEffect, useRef, useState} from "react";

export const useIntersection = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState()

    const callback = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        // create variable that will hold ref, getting rid of the warning
        let observerRefValue = null
        const observer = new IntersectionObserver(callback, options)
        // if there is something to observe
        if (containerRef.current) {
            observer.observe(containerRef.current)
            observerRefValue = containerRef.current
        }
        // clean up function
        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue)
            }
        }
    })
    return { isVisible, containerRef }
}
