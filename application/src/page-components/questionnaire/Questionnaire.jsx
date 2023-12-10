import Button from '../../components/Button'
import { palette, typography } from '../../theme';
import { ButtonLink } from "../../components/ButtonLink";

const Questionnaire = () => {

    return (
        <>
        <p>Questionnaire</p>
        <Button
            onClick= {() => console.log('click')}
            color={palette.primary}
    
        >button jee</Button>
         <ButtonLink href="/results">Continue</ButtonLink>
        </>
    );
};

export default Questionnaire;