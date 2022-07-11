import { motion } from 'framer-motion';
const MenuCard = (props) => {
    const object = props.object;

    return (
        <motion.div whileHover={{ scale: 1.1}}>
            <a href={`/list/${object.linkTo}`}>
                <div className="menuCard">
                    <div className="card" style={{ backgroundColor: object.mainColor }} >
                        <div className="card-body">
                            <h2 className="display-5 whiteHeading">{object.name}</h2>
                            <p className="lead whiteHeading">{object.paragraph}</p>
                        </div>
                        <div className="mx-auto icon" style={{ backgroundColor: object.secondaryColor }}>
                            {object.icon}
                        </div>
                    </div>
                </div>  
            </a>
        </motion.div>
    );
}

export default MenuCard;