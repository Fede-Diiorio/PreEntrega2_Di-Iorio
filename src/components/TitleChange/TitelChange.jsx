import { useEffect } from "react";

const TileChange = ({ title }) => {
    useEffect(() => {
        // Actualiza el título del documento
        document.title = title;

        // Crea un nuevo enlace para el favicon
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = "/new-favicon.ico";

        // Encuentra el enlace actual del favicon
        const oldLink = document.querySelector('link[rel="icon"]');

        // Reemplaza el enlace antiguo con el nuevo
        if (oldLink) {
            document.head.removeChild(oldLink);
        }
        document.head.appendChild(newLink);

        // Limpia el enlace al desmontar el componente
        return () => {
            if (newLink.parentNode) {
                newLink.parentNode.removeChild(newLink);
            }
        };
    }, [title]); // Asegúrate de incluir title como dependencia

    return <></>;
};

export default TileChange;
