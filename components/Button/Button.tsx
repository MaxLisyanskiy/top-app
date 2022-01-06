import { ButtonProps } from "./Button.props";
import st from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';


export const Button = ({children, appearence, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button 
            className={cn(st.button, className, {
                [st.primary]: appearence == 'primary',
                [st.ghost]: appearence == 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(st.arrow, {
                [st.down]: arrow == 'down'
            })}><ArrowIcon/></span>}
        </button>
    );
};