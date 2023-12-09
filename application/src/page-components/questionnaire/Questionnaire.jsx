import Button from '../../components/Button'
import { palette, typography } from '../../theme';

const Questionnaire = () => {

    return (
        <>
        <p>Questionnaire</p>
        <Button
            onClick= {() => console.log('click')}
            color={palette.primary}
    
        >button jee</Button>
        </>
    );
};

export default Questionnaire;