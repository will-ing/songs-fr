
import React from "react";

export default function Footer(props) {
    return (
        <footer>
            <div>
                © 2020 Copyright:
             <a href="#!">{props.copyright}</a>
            </div>
        </footer>
    );
}