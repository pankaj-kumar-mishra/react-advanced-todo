import { ComponentProps, ElementType } from 'react'
import { container } from '../dependencies'

// NOTE ElementType (function and class) components
export const withDependencies = (
  Component: ElementType,
  dependencies: { [key: string]: symbol },
) => {
  const dependencyProps = {}

  Object.keys(dependencies).forEach((propName) => {
    const dependencyKey = Object.getOwnPropertyDescriptor(
      dependencies,
      propName,
    )?.value
    const dependency = container.get(dependencyKey)

    // props[propName] = dependency
    // NOTE to define we can use below approach
    Object.defineProperty(dependencyProps, propName, {
      value: dependency,
      enumerable: true,
    })
    // NOTE internally JS enumerate properties but on "defineProperty" we need to manually do enumerable true
  })

  return (props: ComponentProps<typeof Component>) => (
    <Component {...props} {...dependencyProps} />
  )
}
