import { useEffect } from "react";

export const useTitle = (conditional, documentTitle, dependencies = []) => {
    useEffect(() => {
        if (conditional) {
            document.title = documentTitle;

            const newLink = document.createElement("link");
            newLink.rel = "icon";
            newLink.href = "/new-favicon.ico";

            const oldLink = document.querySelector('link[rel="icon"]');

            if (oldLink) {
                document.head.removeChild(oldLink);
            }
            document.head.appendChild(newLink);

            return () => {
                if (newLink.parentNode) {
                    newLink.parentNode.removeChild(newLink);
                }
            };
        } else {
            document.title = 'Plataforma 9 3/4 | Inicio';
        }
    }, [dependencies]);
};
