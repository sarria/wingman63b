import { useState, useEffect, useRef } from "react";
import cx from 'classnames';
import parse from 'html-react-parser';
import styles from './bios.module.scss';
import ImageRatio from './elements/ImageRatio';

const Bios = ({ data }) => {
    const [selectedBio, setSelectedBio] = useState(0);
    const [thumbnailSize, setThumbnailSize] = useState(0);
    const thumbnailsRef = useRef(null);

    useEffect(() => {
        const resizeThumbnails = () => {
            if (thumbnailsRef.current) {
                const firstThumbnail = thumbnailsRef.current.children[0];
                if (firstThumbnail) {
                    const width = firstThumbnail.clientWidth; // Get the computed width in pixels
                    setThumbnailSize(width); // Update thumbnail size
                }
            }
        };

        resizeThumbnails();
        window.addEventListener("resize", resizeThumbnails);

        return () => window.removeEventListener("resize", resizeThumbnails);
    }, [data.bios.length]);

    const item = data.bios[selectedBio] || null;

    return (
        <div className={styles.root} id="bios">
            <div className={cx(styles.wrapper, { [styles.marginLeft]: data.marginLeft })}>
                <div className={styles.thumbnails} ref={thumbnailsRef}>
                    {data.bios.map((bio, index) => (
                        <div
                            key={index}
                            style={{
                                width: `${100 / data.bios.length}%`, // Dynamic width calculation
                                height: `${thumbnailSize}px`, // Dynamically set height
                            }}
                            className={cx(styles.thumbnail, { [styles.active]: selectedBio === index })}
                            onClick={() => setSelectedBio(index)}
                        >
                            <ImageRatio image={bio.photo} ratio="115%" />
                        </div>
                    ))}
                </div>
                {item && (
                    <div className={styles.item} id={selectedBio + "_" + item.name}>
                        <div className={styles.content}>
                            <div className={styles.photo}>
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
