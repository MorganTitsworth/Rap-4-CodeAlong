import { useLayoutEffect, useEffect, useRef, useState } from 'react';

export default function LayoutEffectComponent() {
    const elementRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useLayoutEffect(() => {
        if (elementRef.current) {
            const { width, height } = elementRef.current.getBoundingClientRect();
            setDimensions({ width, height });
        }
    }, []);

    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} ref={elementRef}>
            <div style={{ width: '100%' }}>
                Width: {dimensions.width}, Height: {dimensions.height}
            </div>
        </div>
    );
}