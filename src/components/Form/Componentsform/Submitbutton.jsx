import styles from './Submitbutton.module.css';

export const Submitbutton = ({text}) => {


    return (
        <div>
        
            <button className={styles.btn}>{text}</button>
        </div>
    );
}