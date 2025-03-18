"use client";

import { ReactNode, createContext, useContext, useEffect, useMemo } from "react";

import { useLocalStorage } from "@/hooks/use-local-storage";

export const themes = ["light", "contrast", "material", "dark", "dim", "system"] as const;

export type ITheme = (typeof themes)[number];

type IConfig = {
    theme: ITheme;
    direction: "ltr" | "rtl";
    sidebarTheme: "light" | "dark";
    fullscreen: boolean;
};

const defaultConfig: IConfig = {
    theme: "system",
    direction: "ltr",
    sidebarTheme: "light",
    fullscreen: false,
};

const useHook = () => {
    const [config, setConfig] = useLocalStorage<IConfig>("__NEXUS_CONFIG_v2.0__", defaultConfig);

    useEffect(() => {
        const fullscreenMedia = window.matchMedia("(display-mode: fullscreen)");
        const fullscreenListener = () => {
            updateConfig({ fullscreen: fullscreenMedia.matches });
        };
        fullscreenMedia.addEventListener("change", fullscreenListener);
        // fullscreenListener();

        return () => {
            fullscreenMedia.removeEventListener("change", fullscreenListener);
        };
    }, []);

    const htmlRef = useMemo(() => typeof window !== "undefined" && document.documentElement, []);

    const updateConfig = (changes: Partial<IConfig>) => {
        setConfig({ ...config, ...changes });
    };

    useEffect(() => {
        if (htmlRef) {
            if (config.theme == "system") {
                htmlRef.removeAttribute("data-theme");
            } else {
                htmlRef.setAttribute("data-theme", config.theme);
            }
            if (config.fullscreen) {
                htmlRef.setAttribute("data-fullscreen", "");
            } else {
                htmlRef.removeAttribute("data-fullscreen");
            }
            if (config.sidebarTheme) {
                htmlRef.setAttribute("data-sidebar-theme", config.sidebarTheme);
            }
            if (JSON.stringify(config) !== JSON.stringify(defaultConfig)) {
                htmlRef.setAttribute("data-changed", "");
            } else {
                htmlRef.removeAttribute("data-changed");
            }
            if (config.direction) {
                htmlRef.dir = config.direction;
            }
        }
    }, [config, htmlRef]);

    const changeTheme = (theme: IConfig["theme"]) => {
        updateConfig({ theme });
    };

    const changeSidebarTheme = (sidebarTheme: IConfig["sidebarTheme"]) => {
        updateConfig({ sidebarTheme });
    };

    const changeDirection = (direction: IConfig["direction"]) => {
        updateConfig({ direction });
    };

    const toggleFullscreen = () => {
        if (document.fullscreenElement != null) {
            document.exitFullscreen();
        } else if (htmlRef) {
            htmlRef.requestFullscreen();
        }
        updateConfig({ fullscreen: !config.fullscreen });
    };

    const reset = () => {
        setConfig(defaultConfig);
        if (document.fullscreenElement != null) {
            document.exitFullscreen();
        }
    };

    return {
        config,
        reset,
        changeSidebarTheme,
        changeTheme,
        changeDirection,
        toggleFullscreen,
    };
};

const ConfigContext = createContext({} as ReturnType<typeof useHook>);

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
    return <ConfigContext value={useHook()}>{children}</ConfigContext>;
};

export const useConfig = () => {
    return useContext(ConfigContext);
};
