import { useLocalStorage } from '@/hooks';
import { formatPhone, maskPhone } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

type UserType = {
	name: string;
	phone: string;
};

export function MyShopping(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useLocalStorage('user', { name: '', phone: '' });

	const {
		register,
		handleSubmit,
		clearErrors,
		formState: { errors },
	} = useForm<UserType>();

	const onClose = () => {
		setIsOpen(false);
		clearErrors();
	};

	const onSubmit: SubmitHandler<UserType> = (data) => {
		setUser(data);
		onClose();
	};

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="flex items-start rounded-md px-3 py-2 font-medium text-gray-500 hover:bg-gray-100"
			>
				Minhas Compras
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={onClose}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/60" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-background p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-foreground"
									>
										Buscar minhas compras
									</Dialog.Title>

									<div className="mt-4 flex flex-col gap-0.5">
										<label htmlFor="name" className="w-fit text-base">
											Nome
										</label>

										<input
											type="text"
											id="name"
											placeholder="Ex: João da Silva"
											className="h-10 rounded border px-2 py-1 text-sm"
											defaultValue={user.name || ''}
											{...register('name', {
												required: 'Campo obrigatório',
											})}
										/>

										{errors.name && (
											<span className="text-sm text-red-500">
												{errors.name.message}
											</span>
										)}

										<label htmlFor="phone" className="mt-3 w-fit text-base">
											Telefone
										</label>

										<input
											type="text"
											id="phone"
											placeholder="Ex: (00) 00000-0000"
											className="h-10 rounded border px-2 py-1 text-sm"
											defaultValue={user.phone || ''}
											{...register('phone', {
												required: 'Campo obrigatório',
												onChange: maskPhone,
												onBlur: formatPhone,
											})}
										/>

										{errors.phone && (
											<span className="text-sm text-red-500">
												{errors.phone.message}
											</span>
										)}
									</div>

									<button
										type="button"
										className="mt-4 inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary"
										onClick={() => handleSubmit(onSubmit)()}
									>
										Buscar
									</button>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
