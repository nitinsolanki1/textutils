import "./navbar.css"

const Navbar=(props)=>{
    
    
    return(
        <div className={`navbar ${props.mode}`} >
            <div className="links">

            <a href="/about">About</a>
            <a href="/sc">textarea</a>
            </div>

            <button  onClick={props.darkmod}>{props.mode}mode</button>
        </div>
    )
}

export default Navbar;