const LayoutPagina =({children,titulo ="Pagina Nueva"}) => {
    return (
      <section className="pagina-section">
          <div className="pagina-cabecera">
          <h2>{titulo}</h2>
          </div>         
          <div className = "contendio"></div>
          {children}
       </section>
    )
}
export default LayoutPagina