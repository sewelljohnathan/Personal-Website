
import { useEffect, useRef } from "react";

const Canvas = props => {

    const { draw, init, width, height, ...rest } = props
    const canvasRef = useRef(null);

    let frameCount = 0;
    let frameId;
    
    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        init(context);

        // Allow for animation
        const render = () => {

            // Draw
            context.clearRect(0, 0, canvas.width, canvas.height);
            draw(context, frameCount);

            // Update frame
            frameCount++
            frameId = window.requestAnimationFrame(render);
        }

        // First render
        render();

        // Cancel last render
        return () => {
            window.cancelAnimationFrame(frameId);
        }

    }, [draw]);

    // Return html canvas element
    return <canvas ref={canvasRef} width={width} height={height} {...rest} />

}

export default Canvas;
