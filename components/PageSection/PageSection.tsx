import { ReactNode } from "react";

interface PageSectionProps{
    children: ReactNode
}

const PageSection = ({children}: PageSectionProps) => {

    return <>{children}</>
}

export default PageSection;