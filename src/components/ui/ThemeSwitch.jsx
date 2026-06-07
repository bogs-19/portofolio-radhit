import React, { useEffect, useState } from 'react';

export default function ThemeSwitch() {
    // Kita set defaultnya 'true' agar awal buka web langsung Dark Mode
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <label className="switch">
            <input
                className="cb"
                type="checkbox"
                checked={isDark}
                onChange={() => setIsDark(!isDark)} // Mengubah state saat diklik
            />
            <span className="toggle">
                <span className="left">off</span>
                <span className="right">on</span>
            </span>
        </label>
    );
}