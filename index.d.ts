// import JoditEditor from './build/types/JoditEditor';
// import { Jodit } from './build/types/include.jodit';
// export default JoditEditor;
// export { Jodit };

import { Jodit } from 'jodit/esm/index';
import * as React from 'react';

type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;

export interface IJoditEditorProps {
	value: string;
	name?: string; 
	className?: string;
	config?: DeepPartial<Jodit['options']>;
	onChange?: (newValue: string) => void;
	onBlur?: (newValue: string) => void;
}

declare const JoditEditor: React.ForwardRefExoticComponent<
	React.PropsWithoutRef<IJoditEditorProps> & React.RefAttributes<Jodit>
>;

export default JoditEditor;
export { Jodit };
