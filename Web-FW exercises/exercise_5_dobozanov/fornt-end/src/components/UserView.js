import styles from './UserView.module.css';
import Article from './Article';

export default function UserView(props){
    const onClickviewWine = (id) =>{
        props.viewWine(id);
    }
    return(
        <div style={styles.container}>
            <div className={styles.grid}>
                {
                    props.items.map(item => <Article key={item.id} {...item}/>)      
                }
                
            </div>
        </div>
    )
}