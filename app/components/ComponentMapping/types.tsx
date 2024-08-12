interface ComponentProps<ComponentData> {
  componentData: ComponentData[];
  renderComponent: (ComponentData: ComponentData) => React.ReactNode;
};

export {
  ComponentProps,
};