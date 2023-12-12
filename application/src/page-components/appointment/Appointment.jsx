import { ButtonLink } from "../../components/ButtonLink";
import { Heading2, BodyTextBlack } from "../../components/shared-font-styles.js";
import { ContentAlignStart, NoStyleWrapper } from "../../components/divs.js";
import {TextInput} from '../../components/TextInput'
import { palette } from '../../theme';
import { StyledSelect } from "../../components/form-styles";
import {Switch} from '../../components/Switch'
import React, { useState } from "react";



const Appointment = () => {
    const [isToggled, setIsToggled] = useState(false)

    return (


        

        <>
        <Heading2>Book an appointment</Heading2>

        <p>Practitioner</p>
        <StyledSelect>
                <option value="0">Juha Aalto</option>
                <option value="0">Anna Niemi</option>
                <option value="0">Emma Virtanen</option>
         </StyledSelect>


        <NoStyleWrapper>
        <ContentAlignStart><p>first name</p></ContentAlignStart>
        <TextInput placeholder="first name" size="2px" color={palette.primary} type="number" />

        <p>last name</p>
        <TextInput placeholder="last name" size="2px" color={palette.primary} type="number" />
        </NoStyleWrapper>

        <p> Date of birth</p>
        <p>Day</p>
        <StyledSelect>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">5</option>
            </StyledSelect>
            <p>Month</p>
        <StyledSelect>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">d</option>
            </StyledSelect>
            <p>Year</p>
        <StyledSelect>

                <option value="0">2000</option>
                <option value="0">1999</option>
                <option value="0">1998</option>
                <option value="0">1997</option>
                <option value="0">1996</option>
            </StyledSelect>

            <p>Gender</p>
        <StyledSelect>
                <option value="0">Man</option>
                <option value="0">Female</option>
                <option value="0">Other</option>
                <option value="0">Prefer not to say</option>
            </StyledSelect>

            
        <p>Phone number</p>
        <TextInput placeholder="phone number" size="2px" color={palette.primary} type="number" />

        <p>Email</p>
        <TextInput placeholder="email" size="2px" color={palette.primary} type="number" />

        <p>Street address</p>
        <TextInput placeholder="email" size="2px" color={palette.primary} type="number" />

        <p>City</p>
        <TextInput placeholder="city" size="2px" color={palette.primary} type="number" />

        <p>Postal code</p>
        <TextInput placeholder="postal code" size="2px" color={palette.primary} type="number" />

<NoStyleWrapper>
<ContentAlignStart></ContentAlignStart>
        <p>Send confirmation</p>
        <p>To email</p>
        <Switch
            toggled={isToggled}
            onChange={e => setIsToggled(e.target.checked)}
            id="test-switch"
            color={palette.primary}
        />
        <p>To phone number</p>
        <Switch
            toggled={isToggled}
            onChange={e => setIsToggled(e.target.checked)}
            id="test-switch"
            color={palette.primary}
        />
</NoStyleWrapper>





 <ButtonLink href="/final">Book appointment</ButtonLink>

      
        </>
    );
};

export default Appointment;
