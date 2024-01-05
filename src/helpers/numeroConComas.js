function mostrarNumeroConComas(numero) {
    const numeroConDecimales = Number(numero).toFixed(2);
    const numeroFormateado = numeroConDecimales.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return numeroFormateado;
}

export { mostrarNumeroConComas };
