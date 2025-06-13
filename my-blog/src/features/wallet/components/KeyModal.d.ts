interface KeyModalProps {
    isOpen: boolean;
    privateKey: string;
    onClose: () => void;
}
export declare const KeyModal: ({ isOpen, privateKey, onClose }: KeyModalProps) => import("react").JSX.Element;
export {};
