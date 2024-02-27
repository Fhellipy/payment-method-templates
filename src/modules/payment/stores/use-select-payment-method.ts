import { create } from 'zustand';

type EnumPaymentMethod = 'pix' | 'creditCard' | 'ticket';

type SelectPaymentMethodState = {
	method: EnumPaymentMethod;
};

type SelectPaymentMethodActions = {
	selectMethod: (method: EnumPaymentMethod) => void;
	resetMethod: () => void;
};

export const useSelectPaymentMethodStore = create<
	SelectPaymentMethodState & SelectPaymentMethodActions
>((set) => ({
	method: 'pix',

	selectMethod: (method: EnumPaymentMethod) => {
		set({ method });
	},

	resetMethod: () => {
		set({ method: 'pix' });
	},
}));
