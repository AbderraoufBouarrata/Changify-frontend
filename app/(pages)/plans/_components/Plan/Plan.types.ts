export type PlanProps = {
    title: string;
    description: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};
