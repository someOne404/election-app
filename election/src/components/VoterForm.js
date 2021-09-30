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
    <form>
        <div>
          <label htmlFor="make-input">First Name</label>
          <input
            type="text"
            id="make-input"
            value={voterForm.firstName}
            onChange={change}
            name="firstName"
          />
        </div>
        <div>
          <label htmlFor="model-input">Last Name</label>
          <input
            type="text"
            id="model-input"
            value={voterForm.lastName}
            onChange={change}
            name="lastName"
          />
        </div>
        <div>
          <label htmlFor="year-input">Address</label>
          <input
            type="text"
            id="year-input"
            value={voterForm.address}
            onChange={change}
            name="address"
          />
        </div>
        <div>
          <label htmlFor="color-input">City</label>
          <input
            type="text"
            id="color-input"
            value={voterForm.city}
            onChange={change}
            name="city"
          />
        </div>
        <div>
          <label htmlFor="color-input">Birthdate</label>
          <input
            type="text"
            id="color-input"
            value={voterForm.birthdate}
            onChange={change}
            name="birthdate"
          />
        </div>
        <div>
          <label htmlFor="color-input">Email</label>
          <input
            type="text"
            id="color-input"
            value={voterForm.email}
            onChange={change}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="color-input">Phone</label>
          <input
            type="text"
            id="color-input"
            value={voterForm.phone}
            onChange={change}
            name="phone"
          />
        </div>
        <button type="button" onClick={submitVoter}>
          Complete Registration
        </button>
      </form>); 

};
