import React, { useState, useEffect } from "react";

import {Button} from '../../components/Button'
import {RadioButtonGroup, PictureRadioButtonGroup} from '../../components/Radio'
import {Switch} from '../../components/Switch'
import {Boolean} from '../../components/Boolean'
import {TextInput} from '../../components/TextInput'
import { palette, typography } from '../../theme';
import { ButtonLink } from "../../components/ButtonLink";
import { InfoBox } from "../../components/infobox";
import { ConclusionWrapper, SmallMargin, RemMarginVertical, WhiteWrapperInner, NoStyleWrapper, ContentAlignEnd, EmergencyWrapper,  } from "../../components/divs";
import { StyledSelect } from "../../components/form-styles";
import { BodyButton, Bodytext, Heading2, Heading3, Heading4, Heading4Center, Bodylink } from "../../components/shared-font-styles";
import mouth from '../../assets/mouth.jpg'

const Questionnaire = () => {
    const [isToggled, setIsToggled] = useState(false)
    const drinks = [
        {
          label: "Coffee",
          name: "button-types",
        },
        {
          label: "Tea",
          name: "button-types",
        },
        {
            label: "Mehu",
            name: "button-types",
        }
      ];

    const genders = [
        {
          label: "Male",
          name: "button-types",
        },
        {
          label: "Female",
          name: "button-types",
        },
        {
            label: "Other",
            name: "button-types",
        },
        {
          label: "Prefer not to say",
          name: "button-types",
      }
      ];

      const wellBeing = [
        {
          label: "I can handle normal day to day tasks",
          name: "button-types",
        },
        {
          label: "I can stand up but can do only most important tasks",
          name: "button-types",
        },
        {
            label: "I can’t do anything but lay on the bed",
            name: "button-types",
        },
      ];

      const fever = [
        {
          label: "Under a day",
          name: "button-types",
        },
        {
          label: "1-3 days",
          name: "button-types",
        },
        {
            label: "More than 3 days",
            name: "button-types",
        },
      ];

      const pictures = [
        {
          label: "Picture 1: white spots",
          name: "button-types",
          image: mouth,
        },
        {
          label: "Picture 2: red throat",
          name: "button-types",
          image: mouth,
        },
        {
            label: "None of the options",
            name: "button-types",
            image: null,
        },
      ];
    
      const [selectedValue, setSelectedValue] = useState(drinks[0].label);
      const [selectedGender, setSelectedGender] = useState(drinks[0].label);
    
      function radioGroupHandler(event) {
        console.log(event.target.value)
        setSelectedValue(event.target.value);
      }

      function genderGroupHandler(event) {
        console.log(event.target.value)
        setSelectedGender(event.target.value);
      }

      useEffect(() => {
        console.log(selectedGender);
      }, [selectedValue, selectedGender]);

    return (
        <>
        <Heading2>Questionnaire</Heading2>
        <RemMarginVertical><Bodytext>More information on the topic:</Bodytext>
        <ul >
          <li>
            <Bodylink href="https://www.w3schools.com/" target="_blank" >Visit W3Schools!</Bodylink>
          </li>
          <li>
            <Bodylink href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</Bodylink>
          </li>
          <li>
            <Bodylink href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</Bodylink>
          </li>
        </ul>
        </RemMarginVertical>
        <RemMarginVertical>
        <Heading3>Basic information</Heading3>
        
          <Bodytext style={{textAlign: 'center'}}>Fill in the basics</Bodytext>
        <br></br>
        <br></br>
        <div style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'start'
            }}>
              <Bodytext >Age</Bodytext>
              <TextInput placeholder="Age" size="2px" width='50px' color={palette.primary} type="number" />
        </div>
        <br></br>
        <br></br>
        <RadioButtonGroup
            title="Gender"
            options={genders}
            onChange={radioGroupHandler}
        />
        </RemMarginVertical>
        <RemMarginVertical>
        <Heading3>General symptoms</Heading3>
        
          <Bodytext style={{textAlign: 'center'}}>Describe your symptoms</Bodytext>
          </RemMarginVertical>
          <RemMarginVertical>
          <br></br>
          <br></br>
          <div style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'start',
                alignItems: 'center'
            }}>
              <Bodytext >Do you have fever?</Bodytext>
              <Boolean
                  onClick= {() => console.log('click')}
                  color={palette.primary}
                  border='none'
              ></Boolean>
        </div>
          <br></br>
          <InfoBox color={palette.secondary}>If your body temperature exeeds 37 C answer yes</InfoBox>
          <br></br>
          <br></br>
          <div style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'start',
                alignItems: 'center',
                maxWidth: '450px'
            }}>
              <Bodytext >Are you facing dificulties to breath?</Bodytext>
              <Boolean
                  onClick= {() => console.log('click')}
                  color={palette.primary}
                  border='none'
              ></Boolean>
        </div>
        <RadioButtonGroup
            title="How is your general well being?"
            options={wellBeing}
            onChange={radioGroupHandler}
        />
        </RemMarginVertical>
        <RemMarginVertical>
        <Heading3>Symptoms</Heading3>
        
        <Bodytext style={{textAlign: 'center'}}>More spesific symptoms</Bodytext>
        </RemMarginVertical>

        <RadioButtonGroup
            title="How long have your symptoms lasted so far?"
            options={fever}
            onChange={radioGroupHandler}
        />

        <div style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'start',
                alignItems: 'center'
            }}>
              <Bodytext >Is your throat sore? </Bodytext>
              <Boolean
                  onClick= {() => console.log('click')}
                  color={palette.primary}
                  border='none'
              ></Boolean>
        </div>

        <div style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'start',
                alignItems: 'center'
            }}>
              <Bodytext >Do you cough?</Bodytext>
              <Boolean
                  onClick= {() => console.log('click')}
                  color={palette.primary}
                  border='none'
              ></Boolean>
        </div>
        
        <Bodytext >Describe your symptoms</Bodytext>
        <img src={mouth} width='200px'/>
        <img src={mouth} width='200px'/>
        <img src={mouth} width='200px'/>

        <PictureRadioButtonGroup
            title="How long have your symptoms lasted so far?"
            options={fever}
            onChange={radioGroupHandler}
        />



        <Button
            onClick= {() => console.log('click')}
            color={palette.primary}
            width='300px'
            border='none'
    
        >button jee</Button>
        <Boolean
            onClick= {() => console.log('click')}
            color={palette.primary}
            border='none'
    
        ></Boolean>

        <Switch
            toggled={isToggled}
            onChange={e => setIsToggled(e.target.checked)}
            id="test-switch"
            color={palette.primary}
        />
        <RadioButtonGroup
            title="Select your drink:"
            options={drinks}
            onChange={radioGroupHandler}
        />
        <TextInput placeholder="A bigger text input" size="2px" color={palette.primary} type="number" />
         <ButtonLink href="/results">Continue</ButtonLink>
        </>
    );
};

export default Questionnaire;