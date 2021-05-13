import styles from "./holy-grail.template.module.css"

const HolyGrailTemplate = (props) =>{
    return(
        <div className={styles.container} >
           <div className={styles.sidebar}>
            Barra
           </div>
           <div className={styles.content}>
              {props.children}
           </div>
        </div>
    )
}

export default HolyGrailTemplate