import { SVGProps } from "react";
import { ComponentType } from "react";

export interface FooterLinks {
    href: string;
    label: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}