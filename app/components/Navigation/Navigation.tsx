import React from "react";
import { useLocation } from "react-router-dom";

import Column from "../LayoutComponents/Column";
import Assets from "../../assets";
import Link from "../Link";
import IconButton from "../IconButton";

import { ComponentProps } from "./types";

import { AppPaths, Styles } from "../../enums";


const Navigation: React.FC<ComponentProps> = () => {

  const { pathname } = useLocation();

  return (
    <Column>
      <Link
        to={ AppPaths.home }
        width="full"
        mt={ Styles.Spacing.small }
      >
        <IconButton
          path={ Assets.homeIcon }
          selected={ pathname === AppPaths.home }
          variant={ pathname === AppPaths.home ? Styles.ButtonVariants.primary : Styles.ButtonVariants.tertiary }
          color={ Styles.Colors.primary }
          width="full"
        >Home</IconButton>
      </Link>
      <Link
        to={ AppPaths.outturns }
        width="full"
        mt={ Styles.Spacing.small }
      >
        <IconButton
          path={ Assets.homeIcon }
          selected={ pathname.includes(AppPaths.outturns) }
          variant={ pathname.includes(AppPaths.outturns) ? Styles.ButtonVariants.primary : Styles.ButtonVariants.tertiary }
          color={ Styles.Colors.primary }
          width="full"
        >Outturns</IconButton>
      </Link>
      <Link
        to={ AppPaths.casks }
        width="full"
        mt={ Styles.Spacing.small }
      >
        <IconButton
          path={ Assets.homeIcon }
          selected={ pathname.includes(AppPaths.casks) }
          variant={ pathname.includes(AppPaths.casks) ? Styles.ButtonVariants.primary : Styles.ButtonVariants.tertiary }
          color={ Styles.Colors.primary }
          width="full"
        >Casks</IconButton>
      </Link>
    </Column>
  )
};

export default Navigation;
