try {
    const localStorageItem = localStorage.getItem("__NEXUS_CONFIG_v2.0__");
    if (localStorageItem) {
        const theme = JSON.parse(localStorageItem).theme;
        if (theme !== "system") {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }
} catch (err) {
    console.log(err);
}
