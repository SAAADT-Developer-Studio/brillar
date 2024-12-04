type Props = Record<string, string> | null;
type BrillarElement = any;

/**@jsx renderElement */
/**@jsxFrag createFragment */
export function renderElement(
  type: string | ((props: NonNullable<Props>) => BrillarElement),
  props: Props,
  ...children: any[]
) {
  let element;

  if (typeof type === "string") {
    element = document.createElement(type);
    for (let key in props) {
      element.setAttribute(key, props[key]);
    }
  } else if (typeof type === "function") {
    const componentProps = props ?? {};
    element = type(componentProps);
  }

  for (let child of children) {
    element.append(child);
  }

  return element;
}

export const renderDom = (component: BrillarElement, rootNode: HTMLElement) => {
  rootNode.append(component);
};
