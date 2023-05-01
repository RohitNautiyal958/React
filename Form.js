import React from 'react'

export default function Form() {
  return (
   
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GfG</title>
        <form>
          <fieldset>
            <legend>Personal Details</legend>
            <p>
              <label>
                Salutation
                <br />
                <select name="salutation">
                  <option>--None--</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Dr.</option>
                  <option>Prof.</option>
                </select>
              </label>
            </p>
            <p>
              <label>First name: <input name="firstName" /></label>
            </p>
            <p>
              <label>Last name: <input name="lastName" /></label>
            </p>
            <p>
              Gender :
              <label><input type="radio" name="gender" defaultValue="male" /> Male</label>
              <label><input type="radio" name="gender" defaultValue="female" /> Female</label>
            </p>
            <p>
              <label>Email:<input type="email" name="email" /></label>
            </p>
            <p>
              <label>Date of Birth:<input type="date" name="birthDate" /></label>
            </p>
            <p>
              <label>
                Address :
                <br />
                <textarea name="address" cols={30} rows={3} defaultValue={""} />
              </label>
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
          </fieldset>
        </form>
      </div>
      
    
  )
}
