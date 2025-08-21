import { ComponentType, SVGProps } from 'react';

export interface AboutData {
    title: string,
    subtitle: { 
        title: string;
        icon: ComponentType<SVGProps<SVGSVGElement>>; 
        color: string;
        description: { text: string, bold: boolean }[],
        link?: string,
    }[];
}