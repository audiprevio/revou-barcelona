function NavBar() {
    return (
        <header style={{display: 'flex', justifyContent: 'space-between', 
        backgroundColor: '#fafafa', padding: '20px', fontFamily: 'Helvetica'}}>
            <div style={{color: '#424242', fontWeight: 'bold', fontSize: '20px', padding: '16px 20px'}}>Acephale</div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <a href="#basic-link1" style={{marginRight: '10px', color: '#424242', textDecoration: 'none', padding: '16px 24px'}}>Ser</a>
                <a href="#basic-link2" style={{marginRight: '10px', color: '#424242', textDecoration: 'none', padding: '16px 24px'}}>Contact</a>
                <button style={{backgroundColor: '#282c34', color: '#fafafa', border: 'none', borderRadius: '4px', padding: '16px 24px', cursor: 'pointer'}}>Get started</button>
            </div>
        </header>
    );
}

export default NavBar;
