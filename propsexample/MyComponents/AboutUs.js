import {useState} from'react';

function AboutUs(props)
{
    // This state variable stores the company name
    const [companyName,setCompanyName]=useState(props.companyName)

    // This state variable stores the address
    const [address, setAddress] = useState(props.address);

    return (<center><div>
         
         {/* This line displays the company name */}
         <b>Contact us @</b>{companyName}<br/>

         {/* This line displays the address */}
         <b>Our Address</b>{address}
        
        </div></center>)
}

export default AboutUs;