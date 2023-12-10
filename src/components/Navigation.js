const Navigation = ({onRouteChange}) => {
    return (
                <nav style= {{display: 'flex', justifyContent:'flex-end'}}>
                    <p 
                        onClick={()=>onRouteChange('admin')} // inorder to avoid function call us arrow function
                        className="f3 link dim black underline pa3 pointer">Admin
                    </p>
                    <p 
                        onClick={()=>onRouteChange('admin-list')} // inorder to avoid function call us arrow function
                        className="f3 link dim black underline pa3 pointer">Admin List
                    </p>
                    <p 
                        onClick={()=>onRouteChange('Book-list')} // inorder to avoid function call us arrow function
                        className="f3 link dim black underline pa3 pointer">Book
                    </p>
                    <p 
                        onClick={()=>onRouteChange('qr-scan')} // inorder to avoid function call us arrow function
                        className="f3 link dim black underline pa3 pointer">QR Scan
                    </p>
                </nav>
    );
}

export default Navigation;