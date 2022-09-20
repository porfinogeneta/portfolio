import {useEffect, useRef, useState} from "react";

export const useIntersection = (options) => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState()

    const callback = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        // if there is something to observe
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }
        // clean up function
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    })
    return { isVisible, containerRef }
}
