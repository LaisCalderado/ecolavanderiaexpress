import React from "react";

type ArrowProps = {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    direction: "left" | "right";
};

export default function Arrow({ className, style, onClick, direction }: ArrowProps) {
    // Ícones simples com unicode; você pode trocar por SVG ou qualquer coisa
    const icon = direction === "left" ? "←" : "→";

    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#25d366",
                borderRadius: "75%",
                width: 35,
                height: 35,
                cursor: "pointer",
                color: "white",
                fontSize: 20,
                userSelect: "none",
            }}
            onClick={onClick}
            aria-label={direction === "left" ? "Previous slide" : "Next slide"}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onClick?.();
            }}
        >
            {icon}
        </div>
    );
}
