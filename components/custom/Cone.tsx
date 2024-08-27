'use client'

import { renderCone } from "@/helpers/renderTetrahedron"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export const Cone = () => {
    const {theme} = useTheme();
    useEffect(() => {
        renderCone(theme ?? 'light');
    }, [theme])
    return (
        <canvas id="cone">
        </canvas>
    )
}
