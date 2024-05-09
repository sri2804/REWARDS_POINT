import './Navbar.css';
 
const Navbar =()=>{
    return(
    <>
    <div className='nav'>
        <ul>
            <a href='/'><li><span style={{color:"#16351B"}}>Home&nbsp;&nbsp;&nbsp;&nbsp;</span></li></a>
            <a href='/'><li><span style={{color:"#16351B"}}>Reward Points</span>-Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></a>
            <a href='/'><li>Detailed Reward Points</li></a>
        </ul>
    </div>
    </>)
}

export default Navbar;