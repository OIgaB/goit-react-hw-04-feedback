import PropTypes from 'prop-types';
import { ButtonsList, Button } from "./styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
        return (
            <ButtonsList>
                {options.map((option) => (
                    <li key={option}>
                        <Button 
                            type='button' 
                            name={option} 
                            $mode={option} 
                            onClick={() => onLeaveFeedback(option)}> {/* good/neutral/bad */}
                            {option}
                        </Button>
                    </li>                        
                ))}
            </ButtonsList>
        );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};