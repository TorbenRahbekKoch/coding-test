export type HairColor = 'black' | 'brown' | 'blonde' | 'red' | 'grey';
export type EyeColor = 'brown' | 'blue' | 'green';
export type Gender = 'female' | 'male';
export type Glasses = 'all' | 'glasses' | 'no-glasses';

export type User = {
    id: string;
    name: string;
    avatar: string;
    gender: Gender;
    hair: HairColor;
    eyes: EyeColor;
    glasses: boolean;
    roles: string[];
};