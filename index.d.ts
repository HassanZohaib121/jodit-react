import { Jodit } from 'jodit/esm/index';
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

export interface IJoditEditorProps {
	value: string;
	name?: string; // Added name property

	className?: string;

	config?: DeepPartial<Jodit['options']>;
	// eslint-disable-next-line no-unused-vars
	onChange?: (newValue: string) => void;
	// eslint-disable-next-line no-unused-vars
	onBlur?: (newValue: string) => void;
}

declare const JoditEditor: ForwardRefExoticComponent<
	PropsWithoutRef<IJoditEditorProps> & RefAttributes<Jodit>
>;

export default JoditEditor;
export { Jodit };
