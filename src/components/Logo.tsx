type ILogo = {
    className?: string;
};

export const Logo = ({ className }: ILogo) => {
    return (
        <>
            <img
                src="/images/logo/logo-dark.png"
                alt="logo-dark"
                className={`hidden h-5.5 dark:inline ${className ?? ""}`}
            />
            <img
                src="/images/logo/logo-light.png"
                alt="logo-light"
                className={`h-5.5 dark:hidden ${className ?? ""}`}
            />
        </>
    );
};
