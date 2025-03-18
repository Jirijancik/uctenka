"use client";

import { useEffect, useRef } from "react";

const IndeterminateCheckboxExample = () => {
    const check1 = useRef<HTMLInputElement | null>(null);
    const check2 = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (check1.current) {
            check1.current.indeterminate = true;
        }
        if (check2.current) {
            check2.current.indeterminate = true;
        }
    });

    return (
        <div className="flex flex-wrap gap-3">
            <input type="checkbox" ref={check1} className="checkbox" aria-label="Checkbox example" />
            <input type="checkbox" ref={check2} disabled className="checkbox" aria-label="Checkbox example" />
        </div>
    );
};

export default IndeterminateCheckboxExample;
