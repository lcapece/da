import { type FC } from 'react';

export interface Service {
  title: string;
  description: string;
  details: string;
  icon: FC<{ className?: string }>;
  gradient: string;
}