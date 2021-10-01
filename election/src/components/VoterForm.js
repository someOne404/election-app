import { useForm } from "../hooks/useForm";

export const VoterForm = ({onSubmitVoter}) => {
    const [
        voterForm,
        change,
        resetVoterForm
      ] = useForm({
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            birthdate: '',
            email: '',
            phone: '',
      });
    
    const submitVoter = () => {

        onSubmitVoter({ ...voterForm });

        resetVoterForm();
    };

    return (      
      <form className="mb-3">
        <div>
          <label htmlFor="firstname-input">First Name</label>
          <input
            type="text"
            id="firstname-input"
            value={voterForm.firstName}
            onChange={change}
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastname-input">Last Name</label>
          <input
            type="text"
            id="lastname-input"
            value={voterForm.lastName}
            onChange={change}
            name="lastName"
          />
        </div>
        <div>
          <label htmlFor="address-input">Address</label>
          <input
            type="text"
            id="address-input"
            value={voterForm.address}
            onChange={change}
            name="address"
          />
        </div>
        <div>
          <label htmlFor="city-input">City</label>
          <input
            type="text"
            id="city-input"
            value={voterForm.city}
            onChange={change}
            name="city"
          />
        </div>
        <div>
          <label htmlFor="birthdate-input">Birthdate</label>
          <input
            type="text"
            id="birthdate-input"
            value={voterForm.birthdate}
            onChange={change}
            name="birthdate"
          />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            type="text"
            id="email-input"
            value={voterForm.email}
            onChange={change}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="phone-input">Phone</label>
          <input
            type="text"
            id="phone-input"
            value={voterForm.phone}
            onChange={change}
            name="phone"
          />
        </div>
        <button className="mt-3" type="button" onClick={submitVoter}>
          Complete Registration
        </button>
      </form>); 

};
