import './Services.css'
import {cirtificationContent,whyGetCirtificateContent} from '../Assets/ServicesContent/Service';
function Services(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 service-banner-bg'>
                    <div>
                        <h1>   Your high- Quality Training </h1>
                        <br/>
                        <h1>  Specialist of IT - EROTECH</h1>
                        <br/>
                        <h1> Solutions</h1>
                    </div>  
                </div>
            </div>
            <div className='row'>
                <ul className='cirtification-container'>
                    {cirtificationContent.map((cource)=> 
                    <li key={cource.id} className='item col-md-3'>
                        <div className='course-label'> <img src={cource.icon} alt="icon" className='cource-icon'/>  </div>
                        <h1>{cource.graduateTitle}</h1>
                        <h1>{cource.aboute}</h1>
                        <hr/>
                        <div className='d-flex'>
                            <h1>{cource.courseName}</h1>
                            <img src={cource.quality} alt="quality" className='quality-logo'/>
                        </div>
                        <p>{cource.description}</p>
                        <button type='button'>Start Certification</button>
                    </li>)}
                </ul>
            </div>
            <h1 style={{textAlign:"center",fontFamily:"Judson"}}>Why Get Certified</h1>
            <ul className='row' style={{justifyContent:"space-around"}}>
                {whyGetCirtificateContent.map((each)=>
                    <li key={each.id} className='col-12 col-md-5 why-list'>
                            <img src={each.logo} alt='logo'/>
                            <p>{each.description}</p>
                    </li>
            )}
            </ul>
            

        </div>
    )
}

export default Services;