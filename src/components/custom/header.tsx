import type { ReactNode } from "react";

export type HeaderProps = {
    title: string;
    leftControls?: ReactNode;
};

function Header({ title, leftControls }: HeaderProps) {
    return (
        <header className="flex h-16 items-center gap-4 border-b px-4">
            {leftControls}
            <h1 className="text-sm font-semibold md:text-base lg:text-lg">
                {title}
            </h1>
        </header>
    );
}

export default Header;
