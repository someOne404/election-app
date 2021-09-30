import { useForm } from "../hooks/useForm";
import { votersReducer } from "../reducers/voterToolReducers";

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
        <td><label htmlFor="make-input">First Name</label>
              <input
                type="text"
                id="make-input"
                value={voterForm.firstName}
                onChange={change}
                name="firstName"
              /></td>
            <td><label htmlFor="model-input">Last Name</label>
              <input
                type="text"
                id="model-input"
                value={voterForm.lastName}
                onChange={change}
                name="lastName"
              /></td>
              
            <td>
              <label htmlFor="year-input">Address</label>
              <input
                type="text"
                id="year-input"
                value={voterForm.address}
                onChange={change}
                name="address"
              />
            </td>
            <td>
              <label htmlFor="color-input">City</label>
              <input
                type="text"
                id="color-input"
                value={voterForm.city}
                onChange={change}
                name="city"
              />
            </td>
            <td>
              <label htmlFor="color-input">Birthdate</label>
              <input
                type="text"
                id="color-input"
                value={voterForm.birthdate}
                onChange={change}
                name="birthdate"
              />
            </td>
            <td>
              <label htmlFor="color-input">Email</label>
              <input
                type="text"
                id="color-input"
                value={voterForm.email}
                onChange={change}
                name="email"
              />
            </td>
            <td>
              <label htmlFor="color-input">Phone</label>
              <input
                type="text"
                id="color-input"
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