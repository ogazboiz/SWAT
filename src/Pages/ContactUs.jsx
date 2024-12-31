
import Header from "../Components/Header/Header";
import bg from "../Assets/Images/strat.png";
import ContactForm from "../Components/Contactcomponent/ContactForm"
import ContactInfo from "../Components/Contactcomponent/ContactInfo";

function ContactUs() {
    return (
      <div className="font-sanss">
          <Header
        title="Contact Us"
        subtitle="This is where imagination meets innovation & passion"
        backgroundImage={bg}
        />
        <ContactInfo/>
        <ContactForm/>
      </div>
    );
  }
  
  export default ContactUs;