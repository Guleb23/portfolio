import { useProgress } from '@react-three/drei';
import React from 'react'

const Loader = () => {
    const { progress } = useProgress();
    return (
        <div>
            <div style={{ color: 'white', fontSize: '1.5rem' }}>
                Загрузка: {progress.toFixed(0)}%
            </div>
        </div>
    );
};

export default Loader
