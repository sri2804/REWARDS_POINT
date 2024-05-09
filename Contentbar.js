import './Contentbar.css';
import Profile from './profile';
import pic from './images/sriprofile.png';
import CircularProgressBar from './CircularProgressBar';
import Navigation  from './SideNavigation';
const Contentbar = ()=>{
    const user = {
        photo: pic,
        name: 'Sri Gayathri K',
        year: 'III',
        department: 'Computer Science',
        rollNo: 'CS101',
        currentRp: 5000,
        redeemedRp: 1000,
        penalty: 200,
      };

      const navigationData = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ];
    //   const gainedPoints = 500;
    //   const totalPoints = 500;
    return (
        
        <>
        <div className='content'>

        <div className='Profile'>
            <Profile user={user}/>
            
        </div>
        <div className='visualisation'>
            {/* <Visulasation/> */}
            <CircularProgressBar
  icon="/path/to/icon.png"
  title="ASSIGNMENT SERIES"
  gainedPoints={50}
  totalPoints={100}
/>

        </div>
        {/* <div className='animation'>
            <Navigation data={navigationData} />
        </div> */}
        </div>
        </>
    )
}

export default Contentbar;