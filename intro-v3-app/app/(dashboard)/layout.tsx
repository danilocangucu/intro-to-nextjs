import { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div>
            <h1>Dashboard Layout</h1>
            <div>{children}</div>
        </div>
    )
}

export default DashboardLayout;