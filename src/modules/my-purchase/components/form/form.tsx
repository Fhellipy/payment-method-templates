'use client';

import { Dialog, Transition } from '@headlessui/react';
import { useLocalStorage } from '@shared/hooks';
import { cn } from '@shared/lib';
import { formatPhone, maskPhone } from '@shared/utils';
import { cva } from 'class-variance-authority';
import { useParams, useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

type UserType = {
	name: string;
	phone: string;
};

type FormProps = {
	variant: 'search' | 'purchase' | 'purchase_promotion';
	buttonOpen: string;
};

export function Form({ variant, buttonOpen }: FormProps): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useLocalStorage('user', { name: '', phone: '' });

	const params = useParams<{ businessID: string }>();
	const router = useRouter();

	const form = useForm<UserType>();

	const onClose = () => {
		setIsOpen(false);
		form.clearErrors();
	};

	const onSubmit: SubmitHandler<UserType> = (data) => {
		setUser(data);
		onClose();

		if (variant === 'search') {
			router.push(`/root/${params.businessID}/minhas-compras`);
		}
	};

	const buttonVariants = cva('py-1  whitespace-nowrap', {
		variants: {
			variant: {
				search:
					'flex items-start rounded-md p-2 font-medium text-gray-500 hover:bg-gray-200',
				purchase:
					'mt-2 w-full rounded bg-primary px-4 text-primary-foreground transition-all hover:bg-primary/80 duration-300',
				purchase_promotion:
					'w-full rounded border text-sm px-2 py-1 bg-primary transition-all text-primary-foreground hover:bg-primary/80 duration-300',
			},
		},
		defaultVariants: {
			variant: 'search',
		},
	});

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className={cn(buttonVariants({ variant }))}
			>
				{buttonOpen}
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
										{variant === 'search'
											? 'Buscar minhas compras'
											: 'Comprar agora'}
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
											{...form.register('name', {
												required: 'Campo obrigatório',
											})}
										/>

										{form.formState.errors.name && (
											<span className="text-sm text-red-500">
												{form.formState.errors.name.message}
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
											{...form.register('phone', {
												required: 'Campo obrigatório',
												minLength: {
													value: 10,
													message: 'Telefone inválido',
												},
												onChange: maskPhone,
												onBlur: formatPhone,
											})}
										/>

										{form.formState.errors.phone && (
											<span className="text-sm text-red-500">
												{form.formState.errors.phone.message}
											</span>
										)}
									</div>

									<button
										type="button"
										className="mt-4 inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary"
										onClick={() => form.handleSubmit(onSubmit)()}
									>
										{variant === 'search' ? 'Buscar' : 'Comprar'}
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
