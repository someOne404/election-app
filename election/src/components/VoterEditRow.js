import { useForm } from "../hooks/useForm";

export const VoterEditRow = ({voter, onSaveVoter, onCancelVoter: cancelVoter}) => {
    const [
        voterForm,
        change,
      ] = useForm({
            firstName: voter.firstName,
            lastName: voter.lastName,
            address: voter.address,
            city: voter.city,
            birthdate: voter.birthdate,
            email: voter.email,
            phone: voter.phone,
      });

      const saveVoter = () => {
        onSaveVoter({
          ...voterForm,
          id: voter.id,
        });
      };

      return (      
        <tr>
        <td>{voter.id}</td>
        <td><label htmlFor="firstname-input">First Name</label>
              <input
                type="text"
                id="firstname-input"
                value={voterForm.firstName}
                onChange={change}
                name="firstName"
              /></td>
            <td><label htmlFor="lastname-input">Last Name</label>
              <input
                type="text"
                id="lastname-input"
                value={voterForm.lastName}
                onChange={change}
                name="lastName"
              /></td>
            <td>
              <label htmlFor="address-input">Address</label>
              <input
                type="text"
                id="address-input"
                value={voterForm.address}
                onChange={change}
                name="address"
              />
            </td>
            <td>
              <label htmlFor="city-input">City</label>
              <input
                type="text"
                id="city-input"
                value={voterForm.city}
                onChange={change}
                name="city"
              />
            </td>
            <td>
              <label htmlFor="birthdate-input">Birthdate</label>
              <input
                type="text"
                id="birthdate-input"
                value={voterForm.birthdate}
                onChange={change}
                name="birthdate"
              />
            </td>
            <td>
              <label htmlFor="email-input">Email</label>
              <input
                type="text"
                id="email-input"
                value={voterForm.email}
                onChange={change}
                name="email"
              />
            </td>
            <td>
              <label htmlFor="phone-input">Phone</label>
              <input
                type="text"
                id="phone-input"
                value={voterForm.phone}
                onChange={change}
                name="phone"
              />
            </td>
            <td>
                <button type="button" onClick={saveVoter}>Save</button>
                <button type="button" onClick={cancelVoter}>Cancel</button>
            </td>
          </tr>);

};