declare module "*.scss" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.svg" {
    import React from "react";
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "*.png" {
    const content: string;
    export default content;
}

declare module "*.jpg" {
    const content: string;
    export default content;
}

declare module "*.pdf" {
    const content: string;
    export default content;
}

declare module "*.mp4" {
    const content: string;
    export default content;
}

declare module "*.gif" {
    const content: string;
    export default content;
}