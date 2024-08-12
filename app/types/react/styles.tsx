type StyleProps<ComponentProps> = {
  [ Property in keyof ComponentProps as `$${ string & Property }`]: ComponentProps[Property];
};

export default StyleProps;
