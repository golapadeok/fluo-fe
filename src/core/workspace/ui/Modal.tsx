import { createContext, useContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type ChildrenType = { children: ReactNode };

type ModalContextType = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModal() {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within an ModalContext");
	}
	return context;
}

export const Modal = ({ children }: ChildrenType) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ModalContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ModalContext.Provider>
	);
};

Modal.Portal = ({ children }: ChildrenType) => {
	const { isOpen } = useModal();
	const scrollbarWidth =
		window.innerWidth - document.documentElement.clientWidth;

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		}
		return () => {
			document.body.style.overflow = "";
			document.body.style.paddingRight = "";
		};
	}, [isOpen, scrollbarWidth]);

	if (!isOpen) return null;

	return createPortal(
		children,
		document.getElementById("modal") as HTMLElement,
	);
};

Modal.Trigger = ({ children }: ChildrenType) => {
	const { setIsOpen } = useModal();
	return (
		<button type="button" onClick={() => setIsOpen(true)}>
			{children}
		</button>
	);
};

Modal.Overlay = ({ children }: ChildrenType) => {
	const { setIsOpen } = useModal();
	const handleKeyEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Escape") {
			setIsOpen(false);
		}
	};
	return (
		<div
			className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
			onClick={() => setIsOpen(false)}
			onKeyDown={handleKeyEvent}
		>
			<div className="flex items-center min-h-screen px-4 py-8">{children}</div>
		</div>
	);
};

Modal.Contents = ({
	children,
	className,
}: { children: ReactNode; className?: string }) => {
	const { setIsOpen } = useModal();
	const stopBubbling = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};
	const handleKeyEvent = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Escape") {
			setIsOpen(false);
		}
	};
	return (
		<div
			className={`relative min-w-40 p-[38px] mx-auto bg-white rounded-md shadow-lg flex flex-col gap-y-9 ${className}`}
			onClick={stopBubbling}
			onKeyDown={handleKeyEvent}
		>
			{children}
		</div>
	);
};

Modal.Header = ({ children }: ChildrenType) => (
	<div className="relative flex items-start border-gray-300 border-solid rounded-t h-[38px]">
		{children}
	</div>
);

Modal.Footer = ({ children }: ChildrenType) => (
	<div className="flex items-center justify-end border-gray-300 border-solid rounded-b">
		<div className="flex gap-x-6">{children}</div>
	</div>
);

Modal.CloseButton = () => {
	const { setIsOpen } = useModal();
	return (
		<X
			className="absolute top-0 right-0 -mt-1 -mr-1 cursor-pointer"
			onClick={() => setIsOpen(false)}
		/>
	);
};
