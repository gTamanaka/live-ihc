import styles from "./holy-grail.template.module.css"

const HolyGrailTemplate = () =>{
    return(
        <div className={styles.container} >
           <div className={styles.sidebar}>
            Barra
           </div>
           <div className={styles.content}>
               Content
           </div>
        </div>
    )
}

export default HolyGrailTemplate