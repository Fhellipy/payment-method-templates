import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	InputPassword,
} from '@shared/components';
import { cn } from '@shared/lib';
import { type Control, type FieldValues, type Path } from 'react-hook-form';

type InputFormProps<T extends FieldValues> =
	React.InputHTMLAttributes<HTMLInputElement> & {
		name: string;
		label: string;
		placeholder: string;
		control: Control<T>;
		disabled?: boolean;
		type?: string;
		uppercase?: boolean;
		isInputPassword?: boolean;
		onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	};

export function InputForm<T extends FieldValues>(props: InputFormProps<T>) {
	const {
		name,
		label,
		placeholder,
		control,
		disabled,
		type,
		uppercase,
		onChange,
		isInputPassword,
	} = props;

	const namePath = name as Path<T>;

	const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			const newEvent = onChange(event);

			return newEvent;
		}

		return event;
	};

	return (
		<FormField
			name={namePath}
			control={control}
			render={({ field }) => (
				<FormItem className="w-full">
					<FormLabel className={cn({ uppercase: uppercase })}>
						{label}
					</FormLabel>

					<FormControl>
						{isInputPassword ? (
							<InputPassword
								{...field}
								type="password"
								autoComplete="password"
								placeholder={placeholder}
								disabled={disabled}
								onChange={(event) => field.onChange(handleValue(event))}
							/>
						) : (
							<Input
								placeholder={placeholder}
								{...field}
								type={type}
								disabled={disabled}
								onChange={(event) => field.onChange(handleValue(event))}
								step={type === 'datetime-local' ? 1 : undefined}
							/>
						)}
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
