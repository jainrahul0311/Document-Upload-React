function HeaderComponent(){
    return(
        <nav className="navbar navbar-light" style={{backgroundColor:"#0c0c0c"}}>
            <div className="container-fluid">
                <div className="navbar-brand">
                    <span className="text-light">{process.env.REACT_APP_HEADER_NAME}</span>
                </div>
            </div>
        </nav>
    );
}
export default HeaderComponent;