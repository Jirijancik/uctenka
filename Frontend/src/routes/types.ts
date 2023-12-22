import { FC, ReactElement } from 'react';
import { PathRouteProps } from 'react-router-dom';

type PathRouteCustomProps = {
  title?: string;
  component: FC;
  icon?: ReactElement;
  isPrivate: boolean;
  isCommon?: boolean;
  isHidden?: boolean;
  isIntro?: boolean;
};

type Routes = Record<string, PathRouteProps & PathRouteCustomProps>;

export type { Routes };
