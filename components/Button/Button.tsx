import { ButtonProps } from "./Button.props";
import st from './Button.module.css';
import cn from 'classnames';


export const Button = ({children, appearence, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button 
            className={cn(st.button, className, {
                [st.primary]: appearence == 'primary',
                [st.ghost]: appearence == 'ghost'
            })}
            {...props}
        >
            {children}
        </button>
    );
};