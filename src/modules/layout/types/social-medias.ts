type EnumType = 'instagram' | 'whatsapp';

export type SocialMediasType = {
	[key in EnumType]: string;
};
