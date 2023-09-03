import React from "react";


const CheckIcon = (props) => {
    
    let Fill = {fill: props.color};
    

    switch (props.id) {
        case "delivered":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style={Fill}>
                    <path d="m382-267.692-198.769-198.77L211.769-495 382-324.769 748.231-691l28.538 28.538L382-267.692Z" />
                </svg>
            );
        case "checked":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style={Fill}>
                    <path d="M268-267.692 69.692-466l28.539-28.308 170 170L295.923-352l28.308 28.308-56.231 56Zm226 0L295.692-466 324-494.539l170 170 368-368L890.308-664 494-267.692ZM466.308-466l-28.539-28.308 198-198L664.308-664l-198 198Z" />
                </svg>
            );
        default:
            break;
    }
}

export default CheckIcon;