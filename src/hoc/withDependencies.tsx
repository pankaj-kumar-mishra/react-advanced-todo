import { ElementType } from 'react'
import { container } from '../dependencies'

// NOTE ElementType (function and class) components
export const withDependencies = (
  Component: ElementType,
  dependencies: { [key: string]: symbol },
) => {
  const props = {}

  Object.keys(dependencies).forEach((propName) => {
    const dependencyKey = Object.getOwnPropertyDescriptor(
      dependencies,
      propName,
    )?.value
    const dependency = container.get(dependencyKey)

    // props[propName] = dependency
    // NOTE to define we can use below approach
    Object.defineProperty(props, propName, {
      value: dependency,
      enumerable: true,
    })
    // NOTE internally JS enumerate properties but on "defineProperty" we need to manually do enumerable true
  })

  return () => <Component {...props} />
}
