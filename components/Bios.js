import { useState, useEffect, useRef } from "react";
import cx from 'classnames';
import parse from 'html-react-parser';
import styles from './bios.module.scss';
import ImageRatio from './elements/ImageRatio';
import { handleScrollToSection } from './utils/shared';

const Bios = ({ data }) => {
    const [selectedBio, setSelectedBio] = useState(0);
    const [showItem, setShowItem] = useState(false);
    const thumbnailsRef = useRef(null);
    const item = data.bios[selectedBio] || null;

    return (
        <div className={styles.root} id="bios">
            <div className={cx(styles.wrapper, { [styles.marginLeft]: data.marginLeft })}>
                <div className={styles.thumbnails} ref={thumbnailsRef}>
                    {data.bios.map((bio, index) => (
                        <div
                            key={index}
                            className={cx(styles.thumbnail, { [styles.active]: selectedBio === index })}
                            onClick={() => {setSelectedBio(index), setShowItem(true), handleScrollToSection('bios')}}
                        >
                            <ImageRatio image={bio.photo} ratio="115%" />
                        </div>
                    ))}
                </div>
                {item && (
                    <div className={cx(styles.item, {[styles.showItem]: showItem})} id={selectedBio + "_" + item.name}>
                        <div className={styles.content}>
                            <div className={styles.photo}>
                                <div className={styles.closeBtn} onClick={() => setShowItem(false)}>X</div>
                                <div className={styles.imageRatio}>
                                    <ImageRatio image={item.photo} ratio="115%" />
                                </div>
                            </div>
                            {item.bio && (
                                <div className={styles.bio}>
                                    <div className={styles.text}>
                                        <h2 className={styles.name}>{item.name}</h2>
                                        {parse(item.bio)}
                                    </div>
                                    <div className={styles.yellowBar} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bios;
